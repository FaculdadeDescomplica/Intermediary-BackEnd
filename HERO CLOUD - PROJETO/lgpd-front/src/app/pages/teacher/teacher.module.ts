import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';

//alterações add esses imports
import {SharedModule} from "../../shared/shared.module";
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';


//add SharedModule em Imports e TeacherForm e TeacherList em declarations
@NgModule({
  declarations: [
    TeacherFormComponent,
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule
  ]
})
export class TeacherModule { }
