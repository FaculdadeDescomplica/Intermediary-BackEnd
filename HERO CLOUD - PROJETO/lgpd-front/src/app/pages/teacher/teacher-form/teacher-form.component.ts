import { Component } from '@angular/core';

//add esses imports
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent {
  teacher: any = {};
  form = new FormGroup({});
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          props: {
            label: 'Nome',
            placeholder: 'Nome do Professor',
            required: true,
          },
        },
        {
          key: 'course_id',
          type: 'input',
          props: {
            label: 'Id do Curso',
            required: true
          },          
        }
      ]
    }
  ];

  //Daqui pra baixo já é a parte de integração frontend/backend
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
 
  }
}
