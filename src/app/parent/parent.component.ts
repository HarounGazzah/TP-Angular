import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  CData: any;
  p: any = 3.25;

  val: string;

  constructor() { }

  ngOnInit() {
  }

}
