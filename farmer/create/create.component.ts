import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FarmerService } from '../farmer.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { fromEvent, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  private unsubscriber: Subject<void> = new Subject<void>();
  private role:any = JSON.parse(localStorage.getItem("currentUser")!);
   userName = this.role.userName;
  constructor(private fb: FormBuilder, private service: FarmerService, private router: Router) { }

  ngOnInit(): void {
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(takeUntil(this.unsubscriber)).subscribe((_) => { history.pushState(null, ''); 
    alert(`You can't go back at this time.`); 
  });
  }

  get farmerContact() {
    return this.creationForm.controls['farmerContact'];
  }

  get farmerName() {
    return this.creationForm.controls['farmerName'];
  }

  get farmerEmail() {
    return this.creationForm.controls['farmerEmail'];
  }
  get houseno() {
    return this.creationForm.controls['address'].controls['houseno'];
  }
  get streetname() {
    return this.creationForm.controls['address'].controls['streetname'];
  }
  get city() {
    return this.creationForm.controls['address'].controls['city'];
  }
  get district() {
    return this.creationForm.controls['address'].controls['district'];
  }
  get state() {
    return this.creationForm.controls['address'].controls['state'];
  }
  get pincode() {
    return this.creationForm.controls['address'].controls['pincode'];
  }

  creationForm = this.fb.group({
    farmerid: [],
    farmerName: ['', [Validators.required]],
    farmerContact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

    address: this.fb.group({
      houseno: ['', [Validators.required, Validators.pattern("^[1-9]\d*(?: ?(?:[a-z]|[/-] ?\d+[a-z]?))?$")]],
      streetname: ['', [Validators.required]],
      city: ['', [Validators.required]],
      district: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required,]]

    }),
    farmerEmail: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    farmerImg: [''],
    farmerAbout: ['']

  });

  msg: string = '';

  create() {
    this.service.createFarmer(this.creationForm.value).subscribe({
      next: (data) => {
        this.msg = "Registered successfully";
      },
      error: (error) => {
        console.log(error);
      }
    })

  }



}








