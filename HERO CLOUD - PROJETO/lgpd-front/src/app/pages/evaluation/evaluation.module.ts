import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationRoutingModule } from './evaluation-routing.module';

//alterações add esses imports
import {SharedModule} from "../../shared/shared.module";
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';


//add SharedModule em Imports e EvaluationForm e EvaluationList em declarations
@NgModule({
  declarations: [
    EvaluationFormComponent,
    EvaluationListComponent
  ],
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    SharedModule
  ]
})
export class EvaluationModule { }
