import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropdetailsRoutingModule } from './cropdetails-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { CropViewComponent } from './crop-view/crop-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    CropListComponent,
    CropViewComponent
  ],
  imports: [
    CommonModule,
    CropdetailsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CropdetailsModule { }
