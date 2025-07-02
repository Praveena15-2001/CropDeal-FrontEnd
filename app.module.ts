import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { CropdetailsModule } from './cropdetails/cropdetails.module';
import { DealerModule } from './dealer/dealer.module';
import { FarmerModule } from './farmer/farmer.module';
import { HomeModule } from './home/home.module';
import { HomescreenComponent } from './home/homescreen/homescreen.component';

import { TokeninterceptorService } from './tokeninterceptor.service';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PaymentComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    FarmerModule,
    DealerModule,
    CropdetailsModule,
    
    HomeModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: TokeninterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
