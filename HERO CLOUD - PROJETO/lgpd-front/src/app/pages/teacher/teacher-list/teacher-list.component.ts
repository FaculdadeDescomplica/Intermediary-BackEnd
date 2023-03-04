import { Component, OnInit } from '@angular/core';

// adicionar imports shared service e teacher
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';

// formatação
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit { // implements OnInit e import oninit
  faPencil = faPencil;
  faTrash = faTrash;

  // atributos curso e professores
  courseLabel: Array<{ value: String, label: String }> = [];
  teachers: any[] = [];

  // adicionar construtor ANTES do onInit
  constructor(
    private teacherService: TeacherService,
    private sharedService: SharedService
  ) { }

  async ngOnInit(): Promise<void> {
    // adicionar conversores
    this.courseLabel = await this.sharedService.convertCourseToOption();
  }
  
  getLabelCourse(value: String): String | undefined {
    let course = this.courseLabel.find((course) => course.value == value)
    return course?.label;
  }

}