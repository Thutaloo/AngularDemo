import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  public username = '';
  public password = '';
  constructor() { }

  ngOnInit(): void { }

  getDetails() {
    alert(this.username + " " + this.password);
  }
}
