import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IScooter } from '../models/Scooter';

@Injectable({
  providedIn: 'root',
})
export class ScootersService {
  constructor(private http: HttpClient) {}

  getAllScooters(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/scooters');
  }

  getOneScooter(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/scooters/${id}`);
  }

  deleteScooter(id: number) {
    return this.http.delete(`http://localhost:3000/scooters/${id}`);
  }

  createScooter(scooter: IScooter): Observable<IScooter> {
    return this.http.post<IScooter>(`http://localhost:3000/scooters`, scooter);
  }

  updateScooter(scooter: any): Observable<any> {
    return this.http.put<any>(
      `http://localhost:3000/scooters/${scooter.id}`,
      scooter
    );
  }

  getRecordsSum(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/total`);
  }

  getTotalKilometers(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/kilometers`);
  }
}
