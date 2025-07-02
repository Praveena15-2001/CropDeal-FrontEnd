import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  farmerName: string = '';
  farmerId: number = 0;
  msg: string = '';
  private unsubscriber: Subject<void> = new Subject<void>();
  constructor(private fb: FormBuilder, private service: FarmerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.farmerName = param.get('name')!;
      }
    );
this.getFarmer(this.farmerName);
history.pushState(null,'', location.href);
    fromEvent(window, 'popstate').pipe(takeUntil(this.unsubscriber) ).subscribe((_) => {history.pushState(null, '');
    alert(`You can't go back at this time.`); });

  }


  updateForm = this.fb.group(
    {

      farmerName: [''],
      farmerContact: [''],

      address: this.fb.group(
        {
          houseno: [''],
          streetname: [''],
          city: [''],
          district: [''],
          state: [''],
          pincode: ['']

        }),
      farmerEmail: [''],
      farmerImg: [''],
      farmerAbout: [''],


    }
  )



  fdetails: Farmer =
    {

      farmerid: 0,
      farmerName: '',
      farmerContact: '',

      address:
      {
        houseno: '',
        streetname: '',
        city: '',
        district: '',
        state: '',
        pincode: ''

      },
      farmerEmail: '',
      farmerImg: '',
      farmerAbout: '',

    };

  getFarmer(farmerName: string) {
    this.service.getFarmerByName(farmerName).subscribe(
      (farmer) => {
        this.farmerId = farmer.farmerid,
        this.updateForm.setValue(
          {

            farmerName: this.farmerName,
            farmerContact: farmer.farmerContact,

            address:
            {
              houseno: farmer.address.houseno,
              streetname: farmer.address.streetname,
              city: farmer.address.city,
              district: farmer.address.district,
              state: farmer.address.state,
              pincode: farmer.address.pincode

            },
            farmerEmail: farmer.farmerEmail,
            farmerImg: farmer.farmerImg,
            farmerAbout: farmer.farmerAbout


          })

      }
    )

  }

  update() {

    this.fdetails = {

      farmerid: this.farmerId,
      farmerName: this.updateForm.get('farmerName')?.value!,
      farmerContact: this.updateForm.get('farmerContact')?.value!,
      address:
      {
        houseno: this.updateForm.get('address')?.get('houseno')?.value!,
        streetname: this.updateForm.get('address')?.get('streetname')?.value!,
        city: this.updateForm.get('address')?.get('city')?.value!,
        state: this.updateForm.get('address')?.get('state')?.value!,
        district: this.updateForm.get('address')?.get('district')?.value!,
        pincode: this.updateForm.get('address')?.get('pincode')?.value!,
      },
      farmerEmail: this.updateForm.get('farmerEmail')?.value!,
      farmerImg: this.updateForm.get('farmerImg')?.value!,
      farmerAbout: this.updateForm.get('farmerAbout')?.value!,
    }

   
   
    this.service.updateFarmer(this.fdetails).subscribe(
      {
       
         next: (data) => 
         {
          
          this.router.navigate(['/farmer/viewfarmer',this.farmerName])
        },
          error: (data) => console.log(data)


      }
    );
    
  }
  navigate():void
  {
  var role = JSON.parse(localStorage.getItem("currentUser")!);
  
  if(role.role == "ROLE_FARMER")
  {
    this.router.navigate(['/farmerdashboard',this.farmerName])
}
  else
  {
    this.router.navigate(['/admin',role.userName]);}
 }



}
