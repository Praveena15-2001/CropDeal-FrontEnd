import { Component, OnInit } from '@angular/core';
import { Cropdetails } from 'src/app/cropdetails/cropdetails';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: Cropdetails[] = JSON.parse(localStorage.getItem("localCart")!);
  totPrice : number = 0;
  private role:any = JSON.parse(localStorage.getItem("currentUser")!);
  userName:string = this.role.userName;
  
  ngOnInit(): void {
    this.calTot()
  }

  calTot()
  {
       for(let i=0;i<this.cartItems.length;i++)
       {
        let price = this.cartItems[i].price*this.cartItems[i].quantity;
        this.totPrice += price;
       }
  }

  
  
  singleDelete(cartItem:any){
    
    if(localStorage.getItem
      ('localCart')){
    this.cartItems = 
    JSON.parse
    (localStorage.getItem
      ('localCart')!);
    for(let i=0; 
    i<this.cartItems.length; 
    i++){
    if
    (this.cartItems[i].cropid
       === cartItem){
    this.cartItems.splice
    (i, 1);
    localStorage.setItem
    ('localCart', 
    JSON.stringify
    (this.cartItems));
    
    }
    }
    }
    }
  
  removeall(){
    localStorage.removeItem
    ('localCart');
    this.cartItems = [];
    this.totPrice = 0;
    
   
    }

  


}
