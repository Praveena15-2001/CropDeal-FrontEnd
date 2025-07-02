import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmer-dashboard',
  templateUrl: './farmer-dashboard.component.html',
  styleUrls: ['./farmer-dashboard.component.css']
})
export class FarmerDashboardComponent  implements OnInit
{
  private unsubscriber: Subject<void> = new Subject<void>();
  farmerName: string = '';
  farmerid : number = 0;

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
    
  };
  constructor(private route : ActivatedRoute,private router:Router,private authservice : AuthService,private service : FarmerService){}
  getFarmerByName(name:string)
  {
    this.service.getFarmerByName(name).subscribe(
      (farmer)=>
      {
        this.fdetails=farmer
      }
    )
  }

  ngOnInit()
  {
    this.route.paramMap.subscribe(
      (param)=>
      {
        this.farmerName = param.get('name')!;
        this.getFarmerByName(this.farmerName);
        this.farmerid=this.fdetails.farmerid;
      }
    )
    history.pushState(null,'', location.href);
    fromEvent(window, 'popstate').pipe(takeUntil(this.unsubscriber) ).subscribe((_) => {history.pushState(null, '');
    alert(`You can't go back at this time.`); });

  }
  logout()
  { 
    this.router.navigate(["/cropdeal/login"]);

    this.authservice.loggedOut();
    localStorage.removeItem
    ('currentUser');
  
  }


}
