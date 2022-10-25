import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  public topics = ['Angular', 'React', 'Vue'];
  constructor() { }

  ngOnInit(): void {
  }

}
