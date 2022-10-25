import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class HttpEmployeeService {
  private _url: string = "http://localhost:3000/employees/";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

  getEmployeeById(id: string): Observable<IEmployee> {
    return this.http.get<IEmployee>(this._url + id);
  }
}
