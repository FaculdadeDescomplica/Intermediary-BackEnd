import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherFormComponent } from './pages/teacher/teacher-form/teacher-form.component';
import { TeacherListComponent } from './pages/teacher/teacher-list/teacher-list.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    // remover load children
    //loadChildren: () => import('./pages/user/user.module').then((module) => module.UserModule),
    // adicionar lista de children
    children: [
      {
        path: 'users',
        component: UserListComponent,
        loadChildren: () => import('./pages/user/user.module').then((module) => module.UserModule)
      },
      {
        path: 'addUser',
        component: UserFormComponent
      },
      {
        path: 'teachers',
        component: TeacherListComponent,
        loadChildren: () => import('./pages/teacher/teacher.module').then((module) => module.TeacherModule)
      },
      {
        path: 'addTeacher',
        component: TeacherFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
