import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  http = inject(HttpClient);
  fb = inject(FormBuilder);
  baseURL='http://127.0.0.1:8000/api/demo/studente';
  studenti: Observable<any[]> | any;
  mostraForm: boolean = false;

  studenteForm = this.fb.group({
    nome: ['', Validators.required],
    cognome: ['', Validators.required],
    matricola: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
  });
  constructor() {}
  ngOnInit() {
    this.getStudenti();
  }

  getStudenti() {
    this.studenti = this.http.get<any[]>(`${this.baseURL}/all`);
  }

  addStudente() {
    if (this.studenteForm.valid) {
      this.http.post(`${this.baseURL}/add`, this.studenteForm.value).subscribe({
        next:() => {
        alert('Studente aggiunto con successo!');
        this.mostraForm=false;
        this.studenteForm.reset();
        this.getStudenti();
      },
      error: (error) => {
        console.error('Errore nell\'aggiunta dello studente:', error);
        alert('Si è verificato un errore durante l\'aggiunta dello studente.');
      }
      });
    }
  }
}
