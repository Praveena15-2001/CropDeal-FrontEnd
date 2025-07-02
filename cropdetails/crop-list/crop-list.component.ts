import { Component } from '@angular/core';
import { Cropdetails } from '../cropdetails';
import { CropdetailsService } from '../cropdetails.service';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css']
})
export class CropListComponent {


  allcrops : Cropdetails[] = [];
  private role:any = JSON.parse(localStorage.getItem("currentUser")!);
  userName = this.role.userName;
  

  constructor(private service : CropdetailsService)
  {
    this.getCrops();
  }
  getCrops()
  {

    this.service.getCrops().subscribe((data) => {
      this.allcrops = data;
 });

  }

  delete(id: number){
    if(confirm("Are you sure want to delete?"))
    this.service.deleteCrop(id).subscribe();
  }



}
