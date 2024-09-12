import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: "full"},
    {path: 'home', component: HomeComponent},
    {path: 'quiensoy', component: QuienSoyComponent},
    {path: 'login', component: LoginComponent}
];
