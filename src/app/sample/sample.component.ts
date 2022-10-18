import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `<div>Hello Again</div>
    <div>This Is An Inline Template</div>
    <h1>Welcome {{ name }}</h1>
    <h1>{{ 2 + 3 }}</h1>
    <h1>{{greetUser()}}</h1>
    <h1>{{site}}</h1>`,
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  public name = 'Thu';
  public site = window.location.href;
  constructor() {}

  greetUser() {
    return 'This is the first project of ' + this.name;
  }
  ngOnInit(): void {}
}
