import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { FarmersListComponent } from './farmers-list/farmers-list.component';
import { DisplayFarmerComponent } from './display-farmer/display-farmer.component';
import {  HttpClientModule } from '@angular/common/http';

import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { CropComponent } from './crop/crop.component';


@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    FarmersListComponent,
    DisplayFarmerComponent,
    
    FarmerDashboardComponent,
         CropComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ]
})
export class FarmerModule { }
