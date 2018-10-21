import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {


  a: any;
  result: any;


area() {
  this.result = this.a * this.a;
  console.log(this.result);
return this.result;
}

cercle() {
this.result = 3.14159 * (this.a * this.a);
}



  constructor() { }

  ngOnInit() {
  }

}
