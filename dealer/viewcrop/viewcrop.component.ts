import { Component, OnInit } from '@angular/core';
import { Cropdetails } from 'src/app/cropdetails/cropdetails';
import { CropdetailsService } from 'src/app/cropdetails/cropdetails.service';

@Component({
  selector: 'app-viewcrop',
  templateUrl: './viewcrop.component.html',
  styleUrls: ['./viewcrop.component.css']
})
export class ViewcropComponent implements OnInit {
  allcrops: Cropdetails[] = [];
  private role:any = JSON.parse(localStorage.getItem("currentUser")!);
  userName:string = this.role.userName;
  

  constructor(private service: CropdetailsService) {
    this.getCrops();
  }
  ngOnInit(): void {
    this.cartNumber()
  }
  getCrops() {

    this.service.getCrops().subscribe((data) => {
      this.allcrops = data;
    });

  }
  
  

  inc(crop: any) {
    
    if (crop.quantity !=5) {
      console.log(crop.quantity)
      crop.quantity += 1;
    }
  }

  dec(crop: any) {
    if (crop.quantity != 1) {
      crop.quantity -= 1;
    }
  }
  itemsCart: any = [];

  addCart(crop: Cropdetails) {

    let cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      let storeDateGet: any = [];
      storeDateGet.push(crop);
      localStorage.setItem('localCart', JSON.stringify(storeDateGet));

    }
    else {
      var id = crop.cropid;
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart')!);
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (id === parseInt(this.itemsCart[i].cropid)) {
          this.itemsCart[i].quantity = crop.quantity;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.itemsCart.push(crop);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));

      }
      else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }


    }

  }
  
  cartItem: number = 0;
  cartNumber() {
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart')!);
      this.cartItem = cartCount.length;

    }

  }


}
