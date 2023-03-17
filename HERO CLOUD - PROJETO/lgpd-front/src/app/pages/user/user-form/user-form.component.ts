import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../user.service";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';

export const GENDERS = [
  { label: 'Homem', value: 'male' },
  { label: 'Mulher', value: 'feme' },
  { label: 'Outro', value: 'other' }
];
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  fileInput: File | null = null;
  fileSelected?: Blob;
  url: SafeResourceUrl | undefined;

  user: any = {};
  model: any = {};
  form = new FormGroup({});

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'first_name',
          type: 'input',
          props: {
            label: 'Nome',
            placeholder: 'Primeiro Nome',
            required: true,
          },
        },
        {
          key: 'last_name',
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
    private userService: UserService,
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) {

    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id !== undefined && params.id !== null) {
        this.user = await this.userService.get<any>({
          url: `http://localhost:3000/user/${params.id}`,
          params: {
          }
        });
        this.model = this.user;
        this.getImage('http://localhost:3000/userImage/' + this.model.id).subscribe(x => this.url = x)
      } else {
        this.model = {}
      }
    });
  }

  public getImage(url: string): Observable<SafeResourceUrl> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map(
        x => {
          const urlToBlob = window.URL.createObjectURL(x)
          return this.domSanitizer.bypassSecurityTrustResourceUrl(urlToBlob)
        }
      ),
    )

  }

  onSelectNewFile(event: any): void {
    const target = event.target as HTMLInputElement
    this.fileSelected = (target.files as FileList)[0];
    this.url = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string;

    // atenção no método bypassSecurityTrustHtml estamos usando URL
  }

  async onSubmit(fileinput: FileList | null): Promise<void> {
    // atenção o parâmetro precisa ter o null por conta do HTML

    let fileInput = fileinput![0] // o fileinput é parâmetro do onSubmit e o fileInput é atributo do componente
    let formData = new FormData();
    formData.append('first_name', this.model.first_name);
    formData.append('last_name', this.model.last_name);
    formData.append('email', this.model.email);
    formData.append('gender', this.model.gender);
    formData.append('file', fileInput);

    if (this.form.valid) {
      if (this.model?.id !== undefined && this.model?.id !== null) {
        this.user = await this.userService.put<any>({
          url: `http://localhost:3000/updateUser/${this.model?.id}`,
          params: {
          },
          data: formData
        });
      } else {
        delete this.model?.id;
        await this.userService.post<any>({
          url: `http://localhost:3000/addUser`,
          params: {
          },
          data: formData
        });
      }
    }
    await this.router.navigate(['/users']);
  }
}
