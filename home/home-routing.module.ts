import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },

    
  {  path:'home',
    component:HomescreenComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
