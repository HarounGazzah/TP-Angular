import { ParentComponent } from './../parent/parent.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  @Input()  pData: any;
  @Output() childEvent = new EventEmitter();

  p: any = 3.25;

  onChange(val) {
    this.childEvent.emit(val);
  }

  constructor() {}

  ngOnInit() {
  }

}
