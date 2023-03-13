import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserFormComponent} from "./user-form/user-form.component";
import {UserListComponent} from "./user-list/user-list.component";

//Alterar as rotas de vazio para users e de user para addUsers
const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'addUsers',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
