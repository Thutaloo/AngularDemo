import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees() {
    return [{ "id": 1, "name": "Allaman", "age": 32 },
    { "id": 2, "name": "Xavier", "age": 23 },
    { "id": 3, "name": "Emerson", "age": 21 },
    { "id": 4, "name": "Katie", "age": 22 }];
  }
}
