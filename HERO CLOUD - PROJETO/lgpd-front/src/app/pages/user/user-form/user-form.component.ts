import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";

export const GENDERS = [
  {label: 'Homem', value: 'male'},
  {label: 'Mulher', value: 'feme'},
  {label: 'Outro', value: 'other'}
];
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  user: any = {};
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'firstName',
          type: 'input',
          props: {
            label: 'Nome',
            placeholder: 'Primeiro Nome',
            required: true,
          },
        },
        {
          key: 'lastName',
          type: 'input',
          props: {
            label: 'Sobrenome',
            placeholder: 'Nome da Família',
            required: true,
          },
        },
        {
          key: 'email',
          type: 'input',
          props: {
            label: 'Email',
            placeholder: 'Email',
            required: true,
          },
        },
        {
          key: 'gender',
          type: 'select',
          props: {
            label: 'Genero',
            placeholder: 'Genero',
            required: true,
            options: GENDERS,
          },
        },
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {

    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id !== undefined && params.id !== null) {
        this.user = await this.userService.get<any>({
          url: `http://localhost:8090/api/users/${params.id}`,
          params: {
          }
        });
        this.model = this.user;
      } else {
        this.model = {}
      }
    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      if (this.model?.id !== undefined && this.model?.id !== null) {
        this.user = await this.userService.put<any>({
          url: `http://localhost:8090/api/users/${this.model?.id}`,
          params: {
          },
          data: this.model
        });
      } else {
        delete this.model?.id;
        await this.userService.post<any>({
          url: `http://localhost:8090/api/users`,
          params: {
          },
          data: this.model
        });
      }
    }
    await this.router.navigate(['/']);
  }
}
