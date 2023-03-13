import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Add esses imports
import {TeacherFormComponent} from "./teacher-form/teacher-form.component";
import {TeacherListComponent} from "./teacher-list/teacher-list.component";


//Alterar routes para adicionar as rotas /teachers e /addTeacher
const routes: Routes = [
  {
    path: 'teachers',
    component: TeacherListComponent
  },
  {
    path: 'addTeacher',
    component: TeacherFormComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
