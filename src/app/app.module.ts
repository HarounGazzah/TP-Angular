import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import { AppRoutingModule } from './/app-routing.module';
import { AreaComponent } from './area/area.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    AreaComponent,
    UserComponent,
    UsersComponent,
    ParentComponent,
    ChildComponent,
    NotfoundComponent,
    ActorsComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
