//Add esses imports
import { Component, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.scss']
})
export class EvaluationListComponent {
  faPencil = faPencil;
  faTrash = faTrash;

  userLabel: Array<{value: Number, label: String}> = []; 
  courseLabel: Array<{value: Number, label: String}> = [];

  evaluations: any[] = [];

  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
