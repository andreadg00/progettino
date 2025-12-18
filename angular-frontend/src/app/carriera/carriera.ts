import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carriera',
  imports: [TableModule, CommonModule],
  standalone: true,
  templateUrl: './carriera.html',
  })
export class Carriera implements OnChanges{
  @Input() studentId!: number;
  @Input() studentName: string=''
  private http=inject(HttpClient);
  carrieraData$!: Observable<any[]>;
  loading: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['studentId'] && this.studentId) {
      this.carrieraData$= this.http.get<any[]> (
        `http://localhost:8000/api/demo/esami/studente/${this.studentId}/`
      );
    }
  }
}

