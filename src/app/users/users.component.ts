import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

users: User[];
user = new User();


addUser(user) {
  this.users.push(user);
}

  constructor() { }

  ngOnInit() {
    this.users  = [
    { fname: 'Haroun', lname: 'Gazzah', email: 'haroun.gazz@gmail.com'},
    { fname: 'Gazzah', lname : 'aaa', email: 'haroun2@gmail.fr'}
  ];
  }

}
