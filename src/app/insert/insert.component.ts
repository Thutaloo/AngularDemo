import { Component, OnInit } from '@angular/core';
import { HttpusersService } from '../httpusers.service';
import { User } from '../user';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  public topics = ['Angular', 'React', 'Vue'];
  // userModel = new user('Thu', 'thu@gmail.com', 222222, 'Angular', 'Morning', true);
  userModel = new User();
  constructor(private _userService: HttpusersService) { }

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
    if (userForm.valid) {
      this._userService.addUser(userForm.value).subscribe(data => console.log(data));
    } else {

    }
    console.log(userForm.valid);
  }

  ngOnInit(): void {
  }

}
