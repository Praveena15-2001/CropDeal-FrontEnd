import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DealerserviceService } from '../dealerservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent 
{
  private role:any = JSON.parse(localStorage.getItem("currentUser")!);
  userName = this.role.userName;
  
  constructor(private fb : FormBuilder,private router:Router,private service : DealerserviceService){}
  get dealerContact()
     {
        return this.createForm.controls['dealerContact'];
     }

     get dealerName()
     {
        return this.createForm.controls['dealerName'];
     }
     
     get dealerEmail()
     {
      return this.createForm.controls['dealerEmail'];
     }

  get houseno()
     {
      return this.createForm.controls['address'].controls['houseno'];
     }
     get streetname()
     {
      return this.createForm.controls['address'].controls['streetname'];
     }
     get city()
     {
      return this.createForm.controls['address'].controls['city'];
     }
     get district()
     {
      return this.createForm.controls['address'].controls['district'];
     }
     get state()
     {
      return this.createForm.controls['address'].controls['state'];
     }
     get pincode()
     {
      return this.createForm.controls['address'].controls['pincode'];
     }



  createForm = this.fb.group(
    {
      dealerid : [],
      dealerName : ['',[Validators.required]],
      dealerimg : [''],
      dealerContact : ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

      address: this.fb.group({
        houseno : ['',[Validators.required,Validators.pattern("^[1-9]\d*(?: ?(?:[a-z]|[/-] ?\d+[a-z]?))?$")]],
        streetname: ['',[Validators.required]],
        city:['',[Validators.required]],
        district:['',[Validators.required]],
        state:['',[Validators.required]],
        pincode:['',[Validators.required,Validators.pattern("^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$")]]

      }),
      dealerEmail : ['',[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      dealerabout : ['']

    }
  )
   msg : string = '';
  create()
   {
      this.service.createDealer(this.createForm.value).subscribe({
        next:(data) => {
          this.msg="Registered successfully";
        },
        error:(error) => {
          console.log(error);
        }
      })

   }


}
