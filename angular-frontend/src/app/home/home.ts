import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Carriera } from '../carriera/carriera';
import { StudentService } from '../student.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, ButtonModule, RouterModule, Carriera, InputTextModule, RippleModule, CommonModule, ReactiveFormsModule, TagModule],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  http = inject(HttpClient);
  fb = inject(FormBuilder);
  private StudentService = inject(StudentService);
  studenti$!: Observable<any[]>;
  mostraForm: boolean = false;
  studenteForm = this.fb.group({
    nome: ['', Validators.required],
    cognome: ['', Validators.required],
    matricola: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
  });

  constructor() {}

  ngOnInit() {
    this.caricaStudenti();
  }

  caricaStudenti() {
    this.studenti$=this.StudentService.getStudenti();
  }

  addStudente() {
    if (this.studenteForm.valid) {
      this.StudentService.addStudente(this.studenteForm.value).subscribe({
        next: () => {
          this.mostraForm = false;
          this.studenteForm.reset();
          this.caricaStudenti();
        },
      });
    }
  }
}