import { Component } from '@angular/core';

//add esses imports
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  // implementar essa classe toda aqui
  course: any = {};
  form = new FormGroup({});
  model: any = {};
  //Cria os campos e atribui os valores para serem gerados pelo angular

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          props: {
            label: 'Nome do Curso',
            placeholder: 'Nome do Curso',
            required: true,
          },
        }
      ]
    }
  ];

  constructor(
    private router: Router
  ) {

  }

}
