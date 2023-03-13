//Add esses imports
import { Component } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent {
  //Implementar essa classe inteira
  faPencil = faPencil;
  faTrash = faTrash;

  courseLabel: Array<{value: string, label: string}> = [];
  teachers: any[] = [];

  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
