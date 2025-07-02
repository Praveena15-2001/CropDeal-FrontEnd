import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { FarmerService } from 'src/app/farmer/farmer.service';
import { CropdetailsService } from '../cropdetails.service';

@Component({
   selector: 'app-create',
   templateUrl: './create.component.html',
   styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  
   name : string = '';
   msg:string='';
   private unsubscriber: Subject<void> = new Subject<void>();


   constructor(private fb: FormBuilder, private route:ActivatedRoute ,private router: Router, private service: FarmerService) { }
   ngOnInit(): void
    {
      this.route.paramMap.subscribe(
         (param)=>this.name=param.get('name')!
      );
      history.pushState(null, '', location.href); fromEvent(window, 'popstate').pipe(takeUntil(this.unsubscriber)).subscribe((_) => { history.pushState(null, ''); alert(`You can't go back at this time.`); });
   }

   get cropname() {
      return this.createForm.controls['cropname'];
   }
   get cropimg() {
      return this.createForm.controls['cropimg'];
   }
   get price() {
      return this.createForm.controls['price'];
   }
   get quantity() {
      return this.createForm.controls['quantity'];
   }
   get address() {
      return this.createForm.controls['address'];
   }
   get contact() {
      return this.createForm.controls['contact'];
   }
   get farmerName() {
      return this.createForm.controls['farmerName'];
   }

   createForm = this.fb.group(
      {
        
         cropid: [],
         cropname: ['', [Validators.required]],
         cropimg: ['', [Validators.required]],
         croptype: [''],
         price: [, [Validators.required, Validators.min(1)]],
         quantity: [, [Validators.required, Validators.min(1)]],
         available: false,
         address: ['', [Validators.required]],
         description: [''],
         contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
         farmerName: [this.name, [Validators.required]]
      }
   )

   create() {
      this.service.addCrop(this.createForm.value,this.createForm.get('farmerName')?.value!).subscribe({
         next: (data) => {
            
            this.router.navigate(['/farmer/viewcrop', this.createForm.get('farmerName')?.value!]);},
         error: (error) => { 
            console.log(error);
         }
      })

   }

}
