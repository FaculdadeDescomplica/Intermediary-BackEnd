import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  
  fileInput : File | null = null;

  user: any = {};
  //Módulo 7 - Criar essa variavel
  form = new FormGroup({});
  model: any = {};

  //Módulo 7 - Criar essas variaveis que são para controle de arquivo e mostrar na tela o arquivo selecionado
  fileSelected?: Blob;
  url: SafeResourceUrl | undefined;

  //Modulo 7 - Adicionar esse options
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
    //Módulo 7 - Injetar essas 2 dependencias para chamada e gerenciar a url retornada pelo backend
    private domSanitizer: DomSanitizer,
    private http: HttpClient
  ) {
    //Integração front com back, trocar a url para o localhost 3000 com o endereço de cada página
    //data: this.model é o que define o modelo que vai ser enviado pelo body
    //params.id é o id que vai ser enviado na url
    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id !== undefined && params.id !== null) {
        this.user = await this.userService.get<any>({
          url: `http://localhost:3000/user/${params.id}`,
          params: {
          }
        });
        this.model = this.user;
        //Módulo 7 - adicionar essa chamada de função para buscar a imagem do usuario no backend
        this.getImage('http://localhost:3000/userImage/' + this.model.id).subscribe(x => this.url = x)
      } else {
        this.model = {}
      }
    });
  }

  //Módulo 7 - Criar essa função que recebe a url do endpoint e retorna a url segura para o angular exibir a imagem como blob
  public getImage(url: string): Observable<SafeResourceUrl> {
    return this.http
      .get(url, { responseType: 'blob' })
      .pipe(
        map(x => {
          const urlToBlob = window.URL.createObjectURL(x) // get a URL for the blob
          return this.domSanitizer.bypassSecurityTrustResourceUrl(urlToBlob); // tell Anuglar to trust this value
        }),
      );
  }

  //Módulo 7 - Criar essa função para ao escolher o arquivo trocar a imagem da tela e ficar mudando toda vez que selecionar uma nova
  onSelectNewFile(event:any):void{
    const target= event.target as HTMLInputElement
    this.fileSelected = (target.files as FileList)[0];
    this.url=this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string;
  }

  async onSubmit(fileinput: FileList | null): Promise<void> {
    
    //Módulo 7 - Alterar dessa forma para que crie o formData e envie os campos separadamente 
    //e adicione o file input que será recebido no backend
    let fileInput = fileinput![0]
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
    //Alterar aqui para após a requisição ir para página /users
    await this.router.navigate(['/users']);
  }
}
