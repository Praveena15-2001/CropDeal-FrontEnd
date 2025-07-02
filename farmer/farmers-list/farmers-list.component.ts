import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmers-list',
  templateUrl: './farmers-list.component.html',
  styleUrls: ['./farmers-list.component.css']
})
export class FarmersListComponent implements OnInit
{

  private role:any = JSON.parse(localStorage.getItem("currentUser")!);
  userName = this.role.userName;
  
  ngOnInit(): void {
    
  }

  allFarmers : Farmer[] = [];

  constructor(private service : FarmerService)
  {
    this.getFarmers();
  }
  getFarmers()
  {

    this.service.getFarmers().subscribe((data) => {
      this.allFarmers = data;
 });

  }

  delete(id: number){
    if(confirm("Are you sure want to delete?"))
    this.service.deleteFarmer(id).subscribe();
  }
 

}


