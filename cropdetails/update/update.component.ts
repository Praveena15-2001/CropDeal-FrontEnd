import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerService } from 'src/app/farmer/farmer.service';
import { Cropdetails } from '../cropdetails';
import { CropdetailsService } from '../cropdetails.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  cropid : number = 0;
  farmerName : string ='';

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
      
    description: '',
    farmerName: ''
    
    };

  constructor(private fb :FormBuilder, private servicef : FarmerService, private service:CropdetailsService, private route:ActivatedRoute,private router:Router){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.cropid=Number(param.get('id'));
        this.farmerName = param.get('name')!;
        this.getCrop(this.cropid);
      }
    );
    
  };

  updateForm = this.fb.group(
    
      {
       
        cropname:[''],
        cropimg:[''],
        croptype :[''] ,
        price:[0],
        quantity:[0],
        contact:[''],
        available:false,
        address:[''],
       description:[''],
       farmerName:['']

      }
    
  )

 
  
  

  getCrop(id:number)
  {
    this.service.getCropById(id).subscribe(
      (crop) => 
       
      {
        this.cropid = crop.cropid,
       this.updateForm.setValue(
        {
          
          cropname:crop.cropname,
          cropimg :crop.cropimg,
          croptype:crop.croptype,
          price:crop.price,
         quantity:crop.quantity,
         contact:crop.contact,
         available:crop.available,
         address : crop.address,
        
         description: crop.description,
         farmerName: this.farmerName
          



        })

      })
  }
    
          
  
  
    update()
    {
      
      this.cdetails={
        cropid:this.cropid,
        cropname:this.updateForm.get('cropname')?.value!,
        cropimg:this.updateForm.get('cropimg')?.value!,
        croptype :this.updateForm.get('croptype')?.value!,
         price:this.updateForm.get('price')?.value!,
         quantity:this.updateForm.get('quantity')?.value!,
         contact:this.updateForm.get('contact')?.value!,
         available:this.updateForm.get('available')?.value!,
        address: this.updateForm.get('address')?.value!,
     
        description:this.updateForm.get('description')?.value!,
        farmerName:this.farmerName
        
     }

     this.servicef.updateCrop(this.cdetails,this.farmerName).subscribe(
      {
        next: (data) => {
            
          this.router.navigate(['/farmer/viewcrop', this.farmerName]);},
       error: (error) => { 
          console.log(error);
       }

      }
     );
  }
  

  



}
