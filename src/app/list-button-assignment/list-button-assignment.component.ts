import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-button-assignment',
  templateUrl: './list-button-assignment.component.html',
  styleUrls: ['./list-button-assignment.component.css']
})
export class ListButtonAssignmentComponent implements OnInit {
  public employeeList: any = [];

  constructor(private list: EmployeeService) { }

  onClick() {
    this.employeeList = this.list.getEmployees();
  }

  ngOnInit(): void {
  }

}
