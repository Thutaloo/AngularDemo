import { Component, OnInit } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  public topics = ['Angular', 'React', 'Vue'];
  userModel = new user('Thu', 'thu@gmail.com', 222222, 'Angular', 'Morning', true);
  constructor() { }

  getData() {
    console.log(this.userModel.username + " " + this.userModel.email);
  }

  getUserData(userForm: any) {
    console.log(userForm.username + " " + userForm.email);
  }

  ngOnInit(): void {
  }

}
