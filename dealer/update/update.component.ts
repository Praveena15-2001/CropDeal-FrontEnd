import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Dealer } from '../dealer';
import { DealerserviceService } from '../dealerservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  dealerName: string = '';
  dealerId: number = 0;
  msg: string = '';
  private unsubscriber: Subject<void> = new Subject<void>();
  
  constructor(private fb: FormBuilder, private service: DealerserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.dealerName = param.get('name')!;
      }
    );
this.getDealer(this.dealerName);
history.pushState(null,'', location.href);
    fromEvent(window, 'popstate').pipe(takeUntil(this.unsubscriber) ).subscribe((_) => {history.pushState(null, '');
    alert(`You can't go back at this time.`); });

  }

  
  updateForm = this.fb.group(
    {

      dealerName: [''],
       dealerimg: [''],
       dealerContact:[''],

      address: this.fb.group(
        {
          houseno: [''],
          streetname: [''],
          city: [''],
          district: [''],
          state: [''],
          pincode: ['']

        }),
      dealerEmail: [''],
      dealerabout: [''],


    }
  )



  ddetails: Dealer =
    {

      dealerid:0,
      dealerName: '',
      dealerimg: '',
      dealerContact:'',

      address:
      {
        houseno: '',
        streetname: '',
        city: '',
        district: '',
        state: '',
        pincode: ''

      },
      dealerEmail: '',
      dealerabout: '',

    };

  getDealer(dealerName: string) {
    this.service.getdealerByName(dealerName).subscribe(
      (dealer) => {
        this.dealerId = dealer.dealerid,
        this.updateForm.setValue(
          {

            dealerName: this.dealerName,
            dealerimg: dealer.dealerimg,
            dealerContact:dealer.dealerContact,
      

            address:
            {
              houseno: dealer.address.houseno,
              streetname: dealer.address.streetname,
              city: dealer.address.city,
              district: dealer.address.district,
              state: dealer.address.state,
              pincode: dealer.address.pincode

            },
            dealerEmail: dealer.dealerEmail,
            dealerabout: dealer.dealerabout,

          })

      }
    )

  }

  update() {

    this.ddetails = {

      
     

      dealerid: this.dealerId,
      dealerName: this.updateForm.get('dealerName')?.value!,
      dealerimg: this.updateForm.get('dealerimg')?.value!,
      dealerContact:this.updateForm.get('dealerContact')?.value!,
      address:
      {
        houseno: this.updateForm.get('address')?.get('houseno')?.value!,
        streetname: this.updateForm.get('address')?.get('streetname')?.value!,
        city: this.updateForm.get('address')?.get('city')?.value!,
        state: this.updateForm.get('address')?.get('state')?.value!,
        district: this.updateForm.get('address')?.get('district')?.value!,
        pincode: this.updateForm.get('address')?.get('pincode')?.value!,
      },
      dealerEmail: this.updateForm.get('dealerEmail')?.value!,
     
      dealerabout: this.updateForm.get('dealerabout')?.value!,
    }

   
   
    this.service.updateDealer(this.ddetails).subscribe(
      {
       
         next: (data) => 
         {
          
          this.router.navigate(['/dealer/viewdealer',this.dealerName])
        },
          error: (data) => console.log(data)


      }
    );
    
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
