import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { Dealer } from '../dealer';
import { DealerserviceService } from '../dealerservice.service';

@Component({
  selector: 'app-dealer-dashboard',
  templateUrl: './dealer-dashboard.component.html',
  styleUrls: ['./dealer-dashboard.component.css']
})
export class DealerDashboardComponent {

  dealerName: string = '';
  dealerid : number = 0;
  private unsubscriber: Subject<void> = new Subject<void>();

  ddetails : Dealer = 
  {

    dealerid : this.dealerid,
      dealerName : '',
      dealerimg : '',
      dealerContact :'',
      address : 
      {
        houseno : '',
        streetname: '',
        city:'',
        district:'',
        state:'',
        pincode:''

      },
      dealerEmail : '',
      dealerabout : ''
    
  };
  constructor(private route : ActivatedRoute,private router:Router,private authservice : AuthService,private service : DealerserviceService){}
  getDealerByName(name:string)
  {
    this.service.getdealerByName(name).subscribe(
      (dealer)=>
      {
        this.ddetails=dealer
      }
    )
  }

  ngOnInit()
  {
    this.route.paramMap.subscribe(
      (param)=>
      {
        this.dealerName = param.get('name')!;
        this.getDealerByName(this.dealerName);
        this.dealerid=this.ddetails.dealerid;
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
    localStorage.removeItem
    ('localCart');
  }



}
