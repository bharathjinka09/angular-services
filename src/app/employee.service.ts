import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      { id: 1, name: 'bharath', age: 25 },
      { id: 2, name: 'ram', age: 33 },
      { id: 3, name: 'prabhas', age: 44 },
      { id: 4, name: 'mahesh', age: 58 },
    ];
  }
}
