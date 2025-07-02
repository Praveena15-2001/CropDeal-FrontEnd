import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-display-farmer',
  templateUrl: './display-farmer.component.html',
  styleUrls: ['./display-farmer.component.css']
})
export class DisplayFarmerComponent  implements OnInit
{
  farmerName: string = '';

  private unsubscriber: Subject<void> = new Subject<void>();
  ngOnInit(){
    this.route.paramMap.subscribe(
      (param) => {
         this.farmerName = param.get('name')!;
        this.getFarmer(this.farmerName);
      }
    );
    history.pushState(null,'', location.href);
    fromEvent(window, 'popstate').pipe(takeUntil(this.unsubscriber) ).subscribe((_) => {history.pushState(null, '');
    alert(`You can't go back at this time.`); });
    
  }

  fdetails : Farmer = 
  {
    farmerid:0,
    farmerName:'',
    farmerContact:'',
    address: 
    {

      houseno :'',
      streetname: '',
      city:'',
      district:'',
      state:'',
      pincode:''
  

    },
    farmerEmail:'',
    farmerImg:'',
    farmerAbout:''

  }
  constructor(private service:FarmerService, private route: ActivatedRoute,private router : Router)
  {}

  getFarmer(name :string)
  {
    this.service.getFarmerByName(name).subscribe(
      (data)=>{
          this.fdetails = data;
      }
    )
  }
  navigate():void
  {
  var role = JSON.parse(localStorage.getItem("currentUser")!);
  console.log(role.role)
  if(role.role == "ROLE_FARMER")
  {
    this.router.navigate(['/farmerdashboard',this.farmerName]);
}
  else
  {
    this.router.navigate(['/admin',role.userName]);}
 }

  


}
