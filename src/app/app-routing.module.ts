import { ActorsComponent } from './actors/actors.component';
import { ActorComponent } from './actor/actor.component';
import { AreaComponent } from './area/area.component';
import { ParentComponent } from './parent/parent.component';
import { UsersComponent } from './users/users.component';
import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'users',   component: UsersComponent },
  { path: 'user',    component: UserComponent },
  { path: 'parent',  component: ParentComponent },
  { path: 'area',    component: AreaComponent },
  { path: 'actor',    component: ActorComponent },
  { path: 'actors',    component: ActorsComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {

}
