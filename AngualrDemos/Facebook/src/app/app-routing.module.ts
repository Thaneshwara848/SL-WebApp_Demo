import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { ErrorComponent } from './error/error.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { RegisterComponent } from './register/register.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';


const routes: Routes = [
  {
    path:'form',component:FormsdemoComponent
  },
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'databind',component:DatabindComponent
  },
  {
    path:'directive',component:DirectiveDemoComponent
  },
  {
    path:'serv',component:ServiceDemoComponent
  },
  {
    path:'pipe',component:PipedemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
