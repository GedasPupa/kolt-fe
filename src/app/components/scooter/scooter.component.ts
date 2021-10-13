import { ScootersService } from './../../services/scooters.service';
import { IScooter } from 'src/app/models/Scooter';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scooter',
  templateUrl: './scooter.component.html',
  styleUrls: ['./scooter.component.css'],
})
export class ScooterComponent implements OnInit {
  id: string | null = null;
  scooter!: IScooter;
  sub: any;
  formValid: boolean = true;

  scooter2: IScooter = {
    id: 0,
    registration_code: '',
    is_busy: 0,
    last_use_time: '1980-01-01',
    total_ride_kilometers: 0,
  };

  @ViewChild('formInfo') formInfo!: NgForm;
  @ViewChild('kmInput') kmInfo!: NgForm;
  @ViewChild('dateInput') dateInput!: NgForm;
  @ViewChild('inName') inName!: NgForm;
  @ViewChild('inBusy') inBusy!: NgForm;
  @ViewChild('inKm') inKm!: NgForm;
  @ViewChild('inDate') inDate!: NgForm;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _scootersService: ScootersService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.sub = this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');

      // subscribe only if ID is not null:
      if (this.id !== null) {
        this._scootersService.getOneScooter(+this.id).subscribe(
          (res) => {
            this.scooter = res[0];
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['/scooters']);
  }

  onCreate() {
    console.log(new Date().toISOString().slice(0, 10));
    this.scooter2.registration_code = this.inName.value;
    this.inKm.value == ''
      ? (this.scooter2.total_ride_kilometers = 0)
      : (this.scooter2.total_ride_kilometers = +this.inKm.value);
    this.inDate.value == ''
      ? this.scooter2.last_use_time
      : (this.scooter2.last_use_time = this.inDate.value);
    this._scootersService.createScooter(this.scooter2).subscribe(
      (res) => {
        alert(
          `Scooter ${this.scooter2.registration_code} successfully created and added to DB!`
        );
        this._router.navigate(['/scooters']);
      },
      (err) => console.log(err)
    );
  }

  onUpdate(): void {
    this.scooter.last_use_time =
      this.dateInput.value == ''
        ? new Date().toISOString().slice(0, 10)
        : this.dateInput.value;
    this.kmInfo.value != ''
      ? (this.scooter!.total_ride_kilometers += +this.kmInfo.value)
      : undefined;

    if (this.formInfo.dirty) {
      this._scootersService.updateScooter(this.scooter).subscribe(
        (res) => {
          console.log(res);
          alert(
            `Scooter ${this.scooter.registration_code} successfully updated!`
          );
          this._router.navigate([`/scooters/${this.scooter.id}`]);
        },
        (err) => console.log(err)
      );
    } else {
      this.formValid = false;
    }
  }

  onDelete(id: number): void {
    this._scootersService.deleteScooter(id).subscribe(
      (res) => {
        alert(
          `Cow ${this.scooter.registration_code} successfully deleted from DB!`
        );
        this._router.navigate(['/scooters']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getDate() {
    return new Date().toISOString().slice(0, 10);
  }
}
