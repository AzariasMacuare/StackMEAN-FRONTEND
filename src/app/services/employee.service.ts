import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  readonly UrlApi = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
   }

  getEmployee() {
    return this.http.get(this.UrlApi)
  }

  postEmployee(employee: Employee) {
    return this.http.post(this.UrlApi, employee);
  }

  putEmployee(employee: Employee) {
    return this.http.put(this.UrlApi + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.UrlApi + `/${_id}`);
  }

}
