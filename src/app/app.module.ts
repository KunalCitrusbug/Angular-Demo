import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    TeacherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
