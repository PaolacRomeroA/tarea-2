import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './pages/login/login.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToHome)},
  {path: 'home', component: HomeComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'about-us', component: AboutUsComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];
