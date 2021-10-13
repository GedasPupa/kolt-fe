import { ScootersService } from './../../services/scooters.service';
import { Component, OnInit } from '@angular/core';
import { IScooter } from 'src/app/models/Scooter';

@Component({
  selector: 'app-scooters',
  templateUrl: './scooters.component.html',
  styleUrls: ['./scooters.component.css'],
})
export class ScootersComponent implements OnInit {
  constructor(private _scootersService: ScootersService) {}
  scooters: IScooter[] = [];
  filteredScooters: IScooter[] = [];
  field: string = '';
  sortAsc: boolean = true;
  dataLoaded: boolean = false;
  total_records: number = 0;
  total_kilometers: number = 0;
  recordsLoaded: boolean = false;

  ngOnInit() {
    this._scootersService.getAllScooters().subscribe(
      (res) => {
        this.scooters = res;
        this.filteredScooters = this.scooters;
        this.dataLoaded = true;
      },
      (err) => {
        console.log(err);
        this.dataLoaded = true;
      }
    );
    this.getScootersSum();
    this.getTotalKilometers();
  }

  onFilter($event: any): void {
    let inp = $event.target.value.toLocaleLowerCase();
    this.filteredScooters = this.scooters.filter(
      (sc) => sc.registration_code.toLocaleLowerCase().indexOf(inp) != -1
    );
  }

  onSort(field: string): void {
    let fieldAsKey = field as keyof IScooter;
    this.field = field;
    if (this.sortAsc) {
      this.filteredScooters.sort((a, b) => {
        return a[fieldAsKey] < b[fieldAsKey] ? -1 : 0;
      });
      this.sortAsc = !this.sortAsc;
    } else {
      this.filteredScooters.sort((a, b) => {
        return a[fieldAsKey] > b[fieldAsKey] ? -1 : 0;
      });
      this.sortAsc = !this.sortAsc;
    }
  }

  onDelete(id: number): void {
    this._scootersService.deleteScooter(id).subscribe(
      (res) => {
        alert(
          `Scooter ${
            this.scooters.find((c) => c.id == id)?.registration_code
          } successfuly deleted from DB!`
        );
        this.scooters = this.scooters.filter((sc) => sc.id !== id);
        this.filteredScooters = this.scooters;
        this.getScootersSum();
        this.getTotalKilometers();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getScootersSum() {
    this._scootersService.getRecordsSum().subscribe(
      (res) => {
        this.total_records = res.total_scooters;
        this.recordsLoaded = true;
      },
      (err) => console.log(err)
    );
  }

  getTotalKilometers() {
    this._scootersService.getTotalKilometers().subscribe(
      (res) => {
        this.total_kilometers = res.total_kilometers;
      },
      (err) => console.log(err)
    );
  }
}
