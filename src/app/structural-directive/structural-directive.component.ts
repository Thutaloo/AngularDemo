import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  public display = true;
  public marks = 71;
  public clr = 'yellow';
  public names = ['Anh', 'Karina', 'Katie', 'Thu'];
  constructor() { }

  ngOnInit(): void {
  }

}
