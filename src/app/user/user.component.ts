import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  display = true;

  showHobbies: boolean;

name: String;
email: String;
address: String;
hob: any;


  hobbies: String [] = ['Music', 'Movies', 'Sport'];

  users: any[] = [
    { name: 'Haroun', email: 'haroun.gazzah@esprit.tn', address: 'Esprit Ghazela Tunis' }

  ];

  delete(index) {
    console.log(index);
    this.hobbies.splice(index, 1);
  }

  add(hob) {
   this.hobbies.push(hob);
  }
  doHide() {
    return this.display = false;
  }
  doShow() {
    return this.display = true;
  }

  toggleHobbies() {
     this.showHobbies = ! this.showHobbies;


  }

  constructor() { }

  ngOnInit() {
    this.showHobbies = false;
    this.name = 'Haroun Gazzah';
    this.address = 'Esprit Ghazela Tunis';
    this.email = 'haroun.gazzah@esprit.tn';
  }

}
