import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// service/guards
import { AuthGuard } from './guards/auth.guard';
import { cAuthService } from './services/auth.service';
import { cDataService } from './services/data.service';
//components
import { cLoginComponent } from './components/authentication/login/login.component';
import { cSignupComponent } from './components/authentication/signup/signup.component';
import { cNotfoundComponent } from './components/authentication/404/notfound.component';
import { cAboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    cLoginComponent,
    cSignupComponent,
    cNotfoundComponent,
    cAboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    cAuthService,
    cDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
