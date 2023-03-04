import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

// modulos para integrar com backend
// import { ActivatedRoute, Router } from "@angular/router";
// import { EvaluationService } from "../evaluation.service";
// import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss']
})

export class EvaluationFormComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  evaluation: any = {};

  userLabel: Array<{value: String, label: String}> = []; 
  courseLabel: Array<{value: String, label: String}> = [];

  form = new FormGroup({});
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'user_id',
          type: 'select',
          props: {
            label: 'Id do Usuario',
            required: true,
            options: this.userLabel,
          },
        },
        {
          key: 'course_id',
          type: 'select',
          props: {
            label: 'Id do Curso',
            required: true,
            options: this.courseLabel,
          },
        },
        {
          key: 'concept',
          type: 'input',
          props: {
            label: 'Conceito',
            placeholder: 'Conceito da Avaliação',
            required: true,
          },
        }
      ]
    }
  ];

}