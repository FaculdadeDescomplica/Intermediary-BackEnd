import {Component, OnInit} from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import {UserService} from "../user.service";
import {GENDERS} from "../user-form/user-form.component";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  faPencil = faPencil;
  faTrash = faTrash;

  users: any[] = [];

  constructor(
    private userService: UserService
  ) {

  }

  async ngOnInit(): Promise<void> {
    await this.listUsers();
  }

  async listUsers(): Promise<void>{
    this.users = await this.userService.get<any[]>({
      url: "http://localhost:8090/api/users",
      params: {
      }
    });
  }

  getLabelGender(value: string): string | undefined {
    let gender = GENDERS.find((gender) => gender.value === value)
    return gender?.label;
  }

  async delete(id: number): Promise<void> {
    if (confirm("Deseja deletar este usuário?")) {
      await this.userService.delete<any>({
        url: `http://localhost:8090/api/users/${id}`,
        params: {}
      });
      await this.listUsers();
    }
  }

  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
