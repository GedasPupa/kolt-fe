import { ScootersService } from './../../services/scooters.service';
import { Component, OnInit } from '@angular/core';
import { IScooter } from 'src/app/models/Scooter';

@Component({
  selector: 'app-scooters',
  template:`
  <h5>SCOOTERS list</h5>
  <div class="filter">
    <label>Find scooter by name:</label>
    <input type="text" (input)="onFilter($event)" class="filter-input"/>
  </div>
  <table class='table' *ngIf="filteredScooters.length > 0; else noScootersWarning">
    <thead>
      <tr>
        <th>Reg.Code <i (click)="onSort('registration_code')" class="fa fa-angle-{{this.field === 'registration_code' ? (this.sortAsc ? 'down' : 'up') : 'down'}}"></i></th>
        <th>Busy <i (click)="onSort('is_busy')" class="fa fa-angle-{{this.field === 'is_busy' ? (this.sortAsc ? 'down' : 'up') : 'down'}}"></i></th>
        <th>Date <i (click)="onSort('last_use_time')" class="fa fa-angle-{{this.field === 'last_use_time' ? (this.sortAsc ? 'down' : 'up') : 'down'}}"></i></th>
        <th>Kilometers <i (click)="onSort('total_ride_kilometers')" class="fa fa-angle-{{this.field === 'total_ride_kilometers' ? (this.sortAsc ? 'down' : 'up') : 'down'}}"></i></th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of filteredScooters">
        <td><a [routerLink]="['/scooters', item.id]">{{item.registration_code}}</a></td>
        <td><i class="fa {{item.is_busy ? 'fa-check' : 'fa-battery-full '}}" aria-hidden="true"></i></td>
        <td>{{item.last_use_time | date }}</td>
        <td>{{item.total_ride_kilometers}}</td>
        <td>
          <button [routerLink]="['/scooters', item.id]" class="btn btn-outline-success action">Update</button>
          <button (click)="onDelete(item.id)" class="btn btn-outline-danger action">Delete</button>
        </td>
      </tr>
    </tbody>
    <tfoot>
        <td>Total scooters: <span *ngIf="recordsLoaded">{{total_records}}</span></td>
        <td></td>
        <td></td>
        <td>Total kilometers: <span *ngIf="recordsLoaded">{{total_kilometers}}</span></td>
        <td></td>
    </tfoot>
  </table>
  <ng-template #noScootersWarning>
    <p *ngIf="dataLoaded" class="alert alert-warning">Sorry, no data!</p>
  </ng-template>
  `,
  styles: [
    '.filter {margin: 20px 7px;}',
    '.filter > input {margin-left: 10px;}',
    '.btn.action {padding: 2px 7px; margin-right: 15px; font-weight: 600;}',
    'tfoot td {font-weight: bold;}'
  ],
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
