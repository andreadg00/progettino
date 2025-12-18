import { Routes } from '@angular/router';
import { Student } from './student/student';
import { Home } from './home/home';
export const routes: Routes = [
    {
        path:'', component: Home},
    {
        path:'studente/:id', component: Student},
    ];
