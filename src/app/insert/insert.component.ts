import { Component, OnInit } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  public topics = ['Angular', 'React', 'Vue'];
  // userModel = new user('Thu', 'thu@gmail.com', 222222, 'Angular', 'Morning', true);
  userModel = new user();
  constructor() { }

  getTopic(t: string): boolean {
    if (t == "")
      return true;
    else
      return false;
  }

  getTimePreference(tp: string): boolean {
    if (tp == "")
      return true;
    else
      return false;
  }

  // getData() {
  //   console.log(this.userModel.username + " " + this.userModel.email);
  // }

  getUserData(userForm: any) {
    console.log(userForm.timePreference.length);
  }

  ngOnInit(): void {
  }

}
