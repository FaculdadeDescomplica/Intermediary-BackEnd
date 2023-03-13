//Add esses imports
import { Component } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  //Implementar essa classe inteira
  faPencil = faPencil;
  faTrash = faTrash;

  courses: any[] = [];

  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
