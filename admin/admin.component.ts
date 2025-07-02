import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  constructor(private router:Router,private authservice : AuthService){}
  logout()
  { 
    this.router.navigate(["/cropdeal/login"]);  
    this.authservice.loggedOut();
  
  }


}
