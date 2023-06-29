import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReservesComponent } from './components/reserves/reserves.component';
import { registerLocaleData } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LocationComponent } from './components/location/location.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LoginFormComponent } from './components/login-form/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReservesComponent,
    RegisterFormComponent,
    LocationComponent,
    ForgotPasswordFormComponent,
    FooterComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
