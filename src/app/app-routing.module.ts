import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cAboutComponent } from './components/about/about.component';
import { cNotfoundComponent } from './components/authentication/404/notfound.component';
import { cLoginComponent } from './components/authentication/login/login.component';
import { cSignupComponent } from './components/authentication/signup/signup.component';

const routes: Routes = 
[
  {
    path : "",
    component : cLoginComponent,
    data: {title:'Login'}
  },
  {
    path : "login",
    component : cLoginComponent,
    data: {title:'Login'}
  },
  {
    path : "signup",
    component : cSignupComponent,
    data: {title:'Sign Up'}
  },
  {
    path : "about",
    component : cAboutComponent,
    data: {title:'About'}
  },
  {
    path : "**",
    component : cNotfoundComponent,
    data: {title:'Not Found'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
