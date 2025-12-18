import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from './student/student';
import { get } from 'http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http=inject(HttpClient);
  private baseURL = 'http://localhost:8000/api/demo';
  getStudenti(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/studente/all/`);
  }
  getStudente(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/studente/get/${id}/`);
  }
  addStudente(dati: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/studente/add/`, dati);
  }
}