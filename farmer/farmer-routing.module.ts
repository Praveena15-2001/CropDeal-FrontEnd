
import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CreateComponent } from './create/create.component';
import { CropComponent } from './crop/crop.component';
import { DisplayFarmerComponent } from './display-farmer/display-farmer.component';
import { FarmersListComponent } from './farmers-list/farmers-list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'farmer/allfarmers',
    component: FarmersListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'farmer/addfarmer',
    component:CreateComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'farmer/updatefarmer/:name',
    component:UpdateComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'farmer/viewfarmer/:name',
    component:DisplayFarmerComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'farmer/viewcrop/:name',
    component:CropComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
