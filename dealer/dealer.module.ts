import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealerRoutingModule } from './dealer-routing.module';
import { CreateComponent } from './create/create.component';
import { DealerViewComponent } from './dealer-view/dealer-view.component';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';
import { ViewcropComponent } from './viewcrop/viewcrop.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    CreateComponent,
    DealerViewComponent,
    DealerListComponent,
    UpdateComponent,
    DealerDashboardComponent,
    ViewcropComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    DealerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DealerModule { }
