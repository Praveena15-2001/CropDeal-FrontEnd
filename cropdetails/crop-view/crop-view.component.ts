import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cropdetails } from '../cropdetails';
import { CropdetailsService } from '../cropdetails.service';

@Component({
  selector: 'app-crop-view',
  templateUrl: './crop-view.component.html',
  styleUrls: ['./crop-view.component.css']
})
export class CropViewComponent {
  private role:any = JSON.parse(localStorage.getItem("currentUser")!);
  userName = this.role.userName;
  constructor(private service:CropdetailsService,private route:ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      (param) => {
        var id = Number(param.get('id'));
        this.getCrops(id);
      }
    );
    
  }

  cdetails : Cropdetails = 
  {
    cropid:0,
    cropname:'',
    cropimg:'',
   croptype :'',
   price:0,
   quantity:0,
   contact:'',
   available:false,
   address : '',
   
      description:'',
      farmerName:''
    
    };
  getCrops(id : number)
  {
    this.service.getCropById(id).subscribe(
      (data)=>{
          this.cdetails = data;
      }
    )

  }

}
