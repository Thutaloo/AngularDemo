import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `<button (click)="greeting($event)">Click</button> {{ greet }}<br />
    <hr />
    <input style="margin-right: 5px;" #someInput type="text" />
    <button (click)="logMessage(someInput)">Submit</button>
    {{ message }}<br />
    <hr />
    <input type="text" #myInput (blur)="logMessage2(myInput)" />
    {{ message2 }} <br />
    <hr />
    <!-- Works the same as blur -->
    <input type="text" #myInput (change)="logMessage2(myInput)" />
    {{ message2 }}
    <br />
    <hr />
    `,
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  constructor() {}

  public greet = '';
  public message = '';
  public message2 = '';

  ngOnInit(): void {}

  greeting(event: any) {
    console.log('Hello World');
    this.greet = 'Hello World';
  }

  logMessage(message: any) {
    this.message = message.value;
  }

  logMessage2(message2: any) {
    this.message2 = message2.value;
  }

  logUserInfo(message: any, message2: any) {
    this.message = message.value;
    this.message2 = message2.value;
  }
}
