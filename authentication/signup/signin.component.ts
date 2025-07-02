import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../auth.service';
import { match } from '../passwordvalidation';
import { User } from '../user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();
  constructor(private f: FormBuilder,private authService:AuthService,private router:Router) { }
  ngOnInit(): void {
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(takeUntil(this.unsubscriber)).subscribe((_) => { history.pushState(null, ''); 
    alert(`You can't go back at this time.`); 
  });
  }
  user: User = {
     userName: '',
     password: '',active: false, role: ''}

  SignUpForm = this.f.group({
    userName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    role: ['role', [Validators.required]]

  },
  {
      validators : match('password','confirmPassword')
  }
  );
  get userName() {
    return this.SignUpForm.controls['userName'];
  }

  get password() {
    return this.SignUpForm.controls['password'];
  }
  get confirmPassword() {
    return this.SignUpForm.controls['confirmPassword'];
  }
  get role() {
    return this.SignUpForm.controls['role'];
  }


  onSubmit() { this.user = 
    { userName: this.SignUpForm.get('userName')?.value!, 
    password: this.SignUpForm.get('password')?.value!, 
    active: true, 
    role: this.SignUpForm.get('role')?.value! 
  } 
   alert("Successfully Registered!");
   this.authService.register(this.user).subscribe
  ({ 
  
   next: (data) =>
   { 
    this.router.navigate(['cropdeal/login'])
   },
   error: (data) => console.log(data) 
  }); 
  }


}
