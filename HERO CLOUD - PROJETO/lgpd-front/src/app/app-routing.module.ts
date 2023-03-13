import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { TeacherFormComponent } from './pages/teacher/teacher-form/teacher-form.component';
import { TeacherListComponent } from './pages/teacher/teacher-list/teacher-list.component';
import { EvaluationListComponent } from './pages/evaluation/evaluation-list/evaluation-list.component';
import { EvaluationFormComponent } from './pages/evaluation/evaluation-form/evaluation-form.component';
import { CourseListComponent } from './pages/course/course-list/course-list.component';
import { CourseFormComponent } from './pages/course/course-form/course-form.component';

const routes: Routes = [
  {
    path: '',
    //Remover linha abaixo para ajustar o routing de todas as páginas
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
      //Adicionar esses valores
      {
        path: 'teachers',
        component: TeacherListComponent,
        loadChildren: () => import('./pages/teacher/teacher.module').then((module) => module.TeacherModule)
      },
      {
        path: 'addTeacher',
        component: TeacherFormComponent
      },
      //Adicionar depois da aula
      {
        path: 'evaluations',
        component: EvaluationListComponent,
        loadChildren: () => import('./pages/evaluation/evaluation.module').then((module) => module.EvaluationModule)
      },
      {
        path: 'addEvaluation',
        component: EvaluationFormComponent
      },
      {
        path: 'courses',
        component: CourseListComponent,
        loadChildren: () => import('./pages/course/course.module').then((module) => module.CourseModule)
      },
      {
        path: 'addCourse',
        component: CourseFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
