import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css'],
})
export class ClassBindingComponent implements OnInit {
  public result = '';
  public marks = 30;
  public hasError = false;
  public isSpecial = true;
  public C = 'brown';
  constructor() { }

  public messageClasses = {
    "success": !this.hasError,
    "danger": this.hasError,
    "textSpecial": this.isSpecial,
  };

  public titleStyles = {
    color: 'red',
    fontStyle: 'italic',
    FontFace: 'Lucida Console',
  };

  ngOnInit(): void {
    if (this.marks > 90) this.result = 'success';
    else if (this.marks > 70) this.result = 'moderate';
    else this.result = 'danger';
  }
}
