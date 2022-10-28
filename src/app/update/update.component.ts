import { Component, OnInit } from '@angular/core';
import { HttpusersService } from '../httpusers.service';
import { User } from '../user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public ID: string = "";
  public message: any = "";
  public topics = ['Angular', 'React', 'Vue'];
  // userModel = new user('Thu', 'thu@gmail.com', 222222, 'Angular', 'Morning', true);
  userModel = new User();
  constructor(private _userService: HttpusersService) { }

  sendID(ID: any) {
    this._userService.getByID(ID.value).subscribe(data => this.userModel = data);
  }


  updateUserData(ID: any, userForm: any) {
    this._userService.updateUser(ID.value, userForm.value).subscribe(data => { this.message = data });
  }

  getUserData(userForm: any) {
    if (userForm.valid) {
      this._userService.addUser(userForm.value).subscribe(data => console.log(data));
    } else {

    }
    console.log(userForm.valid);
  }

  deleteUser(ID: any) {
    this._userService.deleteUser(ID.value).subscribe(data => { this.message = data })
  }

  getTimePreference(tp: string): boolean {
    if (tp == "")
      return true;
    else
      return false;
  }

  ngOnInit(): void {
  }

}
