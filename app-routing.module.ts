import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DealerDashboardComponent } from './dealer/dealer-dashboard/dealer-dashboard.component';
import { FarmerDashboardComponent } from './farmer/farmer-dashboard/farmer-dashboard.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  
    {
      path:'',redirectTo:'cropdeal/signin',pathMatch:'full'
    },
    {
      path:'farmerdashboard/:name',
      component:FarmerDashboardComponent
    },
    {
      path:'dealerdashboard/:name',
      component:DealerDashboardComponent
    },
    {
      path:'admin/:name',
      component:AdminComponent
    },

    {
      path:'payment',
      component:PaymentComponent
    }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
