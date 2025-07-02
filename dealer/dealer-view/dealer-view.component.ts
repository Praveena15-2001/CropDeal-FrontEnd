import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Dealer } from '../dealer';
import { DealerserviceService } from '../dealerservice.service';

@Component({
  selector: 'app-dealer-view',
  templateUrl: './dealer-view.component.html',
  styleUrls: ['./dealer-view.component.css']
})
export class DealerViewComponent 
{
  dealerName : string = '';
  private unsubscriber: Subject<void> = new Subject<void>();
  constructor(private service:DealerserviceService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.dealerName = param.get('name')!;
      }
    );
    history.pushState(null,'', location.href);
    fromEvent(window, 'popstate').pipe(takeUntil(this.unsubscriber) ).subscribe((_) => {history.pushState(null, '');
    alert(`You can't go back at this time.`); });

this.getDealer(this.dealerName)

  }


  ddetails : Dealer = 
  {

    dealerid : 0,
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

  getDealer(name : string)
  {
    this.service.getdealerByName(name).subscribe(
      (data)=>{
          this.ddetails = data;
      }
    )

  }
  navigate():void
  {
  var role = JSON.parse(localStorage.getItem("currentUser")!);
  
  if(role.role == "ROLE_DEALER")
  {
    this.router.navigate(['/dealerdashboard',this.dealerName])
}
  else
  {
    this.router.navigate(['/admin',role.userName]);}
 }

}
