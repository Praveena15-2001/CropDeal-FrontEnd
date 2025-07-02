import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { AuthRequest } from '../auth-request';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  errorMsg:string ='';
  
  private unsubscriber: Subject<void> = new Subject<void>();
  
  constructor(private f: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(takeUntil(this.unsubscriber)).subscribe((_) => { history.pushState(null, ''); 
    alert(`You can't go back at this time.`); 
  });
  }

  request: AuthRequest = { userName: '', password: '' }

  LoginForm = this.f.group({
    userName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
    password: ['', [Validators.required]],
  })

  get userName() {
    return this.LoginForm.controls['userName'];
  }

  get password() {
    return this.LoginForm.controls['password'];
  }

  login() {
    this.request.userName = this.LoginForm.get('userName')?.value!;
    this.request.password = this.LoginForm.get('password')?.value!;
    this.authService.login(this.request).subscribe({
      next: (data) => {
        this.authService.storeToken(data.jwt);
        
        this.authService.getUserRole(this.request.userName).subscribe(
          {
            next: (role) => {
              localStorage.setItem("currentUser", JSON.stringify(role));
              if (role.role == 'ROLE_FARMER') {  
                this.router.navigate(['farmerdashboard', this.request.userName]) }
              else if (role.role == 'ROLE_DEALER') {
                console.log(role.role);
                this.router.navigate(['dealerdashboard', this.request.userName])
              }
              else 
              {
                this.router.navigate(['admin', this.request.userName])
              }
            },
           
             
          }
          
          );
      },
      error: (data) => 
      {
       this.errorMsg = "Invalid Username/Password";
        
   }
    })
    
  }
 


}
