import { Component, OnInit } from '@angular/core';
import { HttpEmployeeService } from '../http-employee.service';

@Component({
  selector: 'app-comsume-file',
  templateUrl: './comsume-file.component.html',
  styleUrls: ['./comsume-file.component.css']
})
export class ComsumeFileComponent implements OnInit {
  public id = "";
  public employee:any = "";
  public employees: any = [];

  constructor(private service: HttpEmployeeService) { }


  ngOnInit(): void {
    this.service.getEmployees().subscribe(data => this.employees = data);
  }

  getById() {
    this.service.getEmployeeById(this.id).subscribe(data => this.employee = data);
  }
}
