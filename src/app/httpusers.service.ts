import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpusersService {
  public url = "http://localhost:3001/users/";

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<Object> {
    return this.http.post(this.url, user);
  }

  getByID(ID: number): Observable<User> {
    return this.http.get<User>(this.url + ID);
  }

  updateUser(ID: number, modifiedUser: User): Observable<Object> {
    return this.http.put<User>(this.url + ID, modifiedUser);
  }

  deleteUser(ID: number): Observable<Object> {
    return this.http.delete<User>(this.url + ID);
  }
}
