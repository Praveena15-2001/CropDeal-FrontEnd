import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CartComponent } from './cart/cart.component';
import { CreateComponent } from './create/create.component';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { DealerViewComponent } from './dealer-view/dealer-view.component';
import { UpdateComponent } from './update/update.component';
import { ViewcropComponent } from './viewcrop/viewcrop.component';

const routes: Routes = [

  
    {
      path:'dealer/updatedealer/:name',
      component:UpdateComponent
    },
    {
      path:'dealer/alldealer',
      component:DealerListComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'dealer/viewdealer/:name',
      component:DealerViewComponent,
      canActivate:[AuthGuard]
    
    },
    {
      path:'dealer/adddealer',
      component:CreateComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'dealer/viewcrop',
      component:ViewcropComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'cart',
      component:CartComponent,
      canActivate:[AuthGuard]

    }
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerRoutingModule { }
