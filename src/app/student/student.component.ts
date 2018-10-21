import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  students: any[] = [
    { cin: 19312976, nom: 'Gazzah', prenom: 'Haroun' },
    { cin: 12345687, nom: 'Rabhi', prenom: 'Takwa' },
  ];


  student: Student[] =
   [{id: 1, name: 'Haroun'},
   {id: 2, name: 'Gazzah'}];





constructor() {}
  }



