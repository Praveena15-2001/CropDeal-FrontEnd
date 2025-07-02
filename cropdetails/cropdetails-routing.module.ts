import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { CropViewComponent } from './crop-view/crop-view.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  {
    path:'crops/allcrops',
    component:CropListComponent
  },
  {
    path:'farmer/addcrops/:name',
    component:CreateComponent
  },
  {
    path:'crops/viewcrop/:id',
    component:CropViewComponent
  },
  {
    path:'farmer/updatecrop/:name/:id',
    component:UpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropdetailsRoutingModule { }
