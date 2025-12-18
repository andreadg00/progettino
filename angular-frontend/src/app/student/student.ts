import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-student',
  imports: [RouterModule, CommonModule, ButtonModule, TagModule, CardModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student implements OnInit {
  private route=inject(ActivatedRoute);
  private studentService=inject(StudentService);
  studente$!: Observable<any>;
  isLoading: boolean = true;

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studente$=this.studentService.getStudente(+id);
    }
  }
}
