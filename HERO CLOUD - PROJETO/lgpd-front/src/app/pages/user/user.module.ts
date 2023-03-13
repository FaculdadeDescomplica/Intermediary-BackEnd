import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
    //Modulo 7- Adicionar as 2 declarações abaixo
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class UserModule { 

}
