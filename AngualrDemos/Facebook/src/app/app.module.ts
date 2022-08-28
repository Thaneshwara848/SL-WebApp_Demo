import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoanComponent } from './loan/loan.component';
import { EduComponent } from './loan/edu/edu.component';
import { HomeComponent } from './loan/home/home.component';
import { PersComponent } from './loan/pers/pers.component';
import { CarComponent } from './loan/car/car.component';
import { ErrorComponent } from './error/error.component';
import { DatabindComponent } from './databind/databind.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoanComponent,
    EduComponent,
    HomeComponent,
    PersComponent,
    CarComponent,
    ErrorComponent,
    DatabindComponent,
    DirectiveDemoComponent,
    AComponent,
    BComponent,
    CComponent,
    ServiceDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
