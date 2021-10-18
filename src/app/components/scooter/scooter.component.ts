import { ScootersService } from './../../services/scooters.service';
import { IScooter } from 'src/app/models/Scooter';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scooter',
  template: `
  <p *ngIf="responseError" class="alert alert-danger">ERROR! Scooter with id {{responseError?.id}} doesn't exist on DB! Create a new one!</p>
  <p *ngIf="!formValid && !formInfo.dirty" class="alert alert-danger">ERROR! Please make some changes before Updating to DB!</p>
  <p *ngIf="!formInfo.valid && formInfo.submitted" class="alert alert-danger">ERROR! Form is not valid. Please chech all fields.</p>
  <form #formInfo="ngForm" action method="GET">
  <h5 *ngIf="scooter !== undefined">Update scooter {{scooter.registration_code}}</h5>
  <table class='table' *ngIf="scooter !== undefined; else noPerson" >
    <thead>
      <tr>
        <th>Name</th>
        <th class="checkbox">Busy</th>
        <th>Total Kms</th>
        <th>Plus Kms</th>
        <th>Last use time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{scooter.registration_code}}</td>
        <td class="checkbox">
          <i class="fa {{scooter.is_busy ? 'fa-check' : 'fa-battery-full '}}" aria-hidden="true"></i>
          <input type="checkbox" [(ngModel)]="scooter.is_busy" name="is_busy">
        </td>
        <td>{{scooter.total_ride_kilometers}}</td>
        <td><input type="number" min="0" max="9999" ngModel #kmInput="ngModel" name="total_ride_kilometers"></td>
        <td><input type="date" [(ngModel)]="scooter.last_use_time" max={{date}} #dateInput="ngModel" name="last_use_time"></td>
      </tr>
    </tbody>
  </table>
  <ng-template #noPerson>
    <h5>Create new scooter</h5>
    <table class='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Total Kms</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="width: 300px;">
            <input style="width: 100px;"type="text" #inName="ngModel" minlength="8" maxlength="8" name="registration_code" ngModel required>
            <p *ngIf="inName.invalid && inName.touched" class="alert alert-warning">Use 8 character s please!</p>
          </td>
          <td style="width: 300px;">
            <input type="number" min="0" max="9999" #inKm="ngModel" name="total_ride_kilometers" ngModel>
            <p *ngIf="inKm.invalid && inKm.touched" class="alert alert-warning">Min - 0, max - 9999 km!</p>
          </td>
          <td><input type="date" #inDate="ngModel" name="last_use_time" [(ngModel)]="date" max={{date}}></td>
        </tr>
      </tbody>
    </table>
  </ng-template>
  <div class="delete-edit-btns">
    <button type="button" class="btn btn-outline-dark" (click)="onBack()">Back</button>
    <button *ngIf="!!scooter" type="button" (click)="onDelete(scooter.id)" class="btn btn-outline-danger" >Delete</button>
    <button *ngIf="!!scooter" type="submit" (click)="onUpdate()" class="btn btn-outline-warning">Update</button>
    <button *ngIf="!scooter" type="button" (click)="onCreate()" class="btn btn-outline-success">Save</button>
  </div>
</form>
  `,
  styles: [
    '.delete-edit-btns { margin-top: 30px; display: flex; justify-content: center; gap: 21px;}',
    '.ng-invalid:not(form).ng-touched { border: 1px solid salmon;}',
    '.checkbox { width: 70px; padding-left: 20px; padding-right: 20px; }',
    '.checkbox > input { float: right; margin-top: 7px; }',
    'p.alert-warning { width: fit-content; margin-top: 10px; }'
  ],
})
export class ScooterComponent implements OnInit {
  id: string | null = null;
  scooter!: IScooter;
  sub: any;
  formValid: boolean = true;
  responseError: any = '';
  date: string = new Date().toISOString().slice(0, 10);

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
            this.scooter.last_use_time = this.scooter.last_use_time.slice(0, 10);
          },
          (err) => {
            console.log(err.error);
            this.responseError = err.error;
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
    if (this.formInfo.valid) {
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
  }

  onUpdate(): void {
    if (this.formInfo.dirty && this.formInfo.valid) {
      this.scooter.last_use_time =
      this.dateInput.value == ''
        ? new Date().toISOString().slice(0, 10)
        : this.dateInput.value;
      this.kmInfo.value != ''
        ? (this.scooter!.total_ride_kilometers += +this.kmInfo.value)
        : undefined;
      this._scootersService.updateScooter(this.scooter).subscribe(
        (res) => {
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
}
