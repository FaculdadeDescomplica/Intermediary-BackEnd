import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';

//alterações add esses imports
import {SharedModule} from "../../shared/shared.module";
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';


//add SharedModule em Imports e CourseForm e CourseList em declarations
@NgModule({
  declarations: [
    CourseFormComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
