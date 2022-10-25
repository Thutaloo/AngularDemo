import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  public name = "techwave";
  public date = new Date();
  public employeeName = "";
  public person = {
    "FirstName": "A",
    "LastName": "B"
  }
  // @Input for child component's variable
  @Input() public childComponentVariable: any;
  @Output() public childEvent = new EventEmitter;

  onclick(message: any) {
    this.childEvent.emit(message.value);
  }

  onSubmit() {
    this.childEvent.emit(this.employeeName);
  }
  constructor(private eService: EmployeeService) { }


  public emps: any = [];

  ngOnInit(): void {
    this.emps = this.eService.getEmployees();
  }

}
