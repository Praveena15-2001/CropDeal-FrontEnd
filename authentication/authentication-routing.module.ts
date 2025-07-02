import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signup/signin.component';

const routes: Routes = [
  {
    path:'cropdeal/signup',
    component:SigninComponent
  },
   { 
    path:'cropdeal/login',
    component:LoginComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
