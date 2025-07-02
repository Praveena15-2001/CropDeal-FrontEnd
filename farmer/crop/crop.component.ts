import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Cropdetails } from 'src/app/cropdetails/cropdetails';

import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {

  farmerName : string = '';
   
   cropdetails : Cropdetails[] = [];
  private unsubscriber : Subject<void> = new Subject<void>();

  constructor(private route : ActivatedRoute,private service : FarmerService){}

  fdetails : Farmer = 
  {

    farmerid : 0,
      farmerName :'',
      farmerContact:'',
      
      address: 
      {
        houseno : '',
        streetname: '',
        city:'',
        district:'',
        state:'',
        pincode:''

      },
     farmerEmail:'',
     farmerImg:'',
     farmerAbout:'',
     cropdetails:[]
    
  };

  ngOnInit()
  {
         this.route.paramMap.subscribe(
          (param)=>
          {
            this.farmerName=param.get('name')!;
           
          }
         );
         this.getCrop();
         history.pushState(null,'', location.href);fromEvent(window, 'popstate').pipe( takeUntil(this.unsubscriber) ).subscribe((_) => { history.pushState(null, ''); alert(`You can't go back at this time.`);8});
  }
  
 

  getCrop()
   {
      this.service.getFarmerByName(this.farmerName).subscribe(
           (data) => {
            this.fdetails=data;
            this.cropdetails = data.cropdetails;
            console.log(this.cropdetails);
           }
      );
         
  }

  delete(id : number){
    if(confirm("Are you sure want to delete?"))
    this.service.deleteCrop(this.farmerName,id).subscribe();
  }






}

