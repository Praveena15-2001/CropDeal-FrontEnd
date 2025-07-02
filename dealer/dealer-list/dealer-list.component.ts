import { Component } from '@angular/core';
import { Dealer } from '../dealer';
import { DealerserviceService } from '../dealerservice.service';

@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer-list.component.html',
  styleUrls: ['./dealer-list.component.css']
})
export class DealerListComponent
{

  allDealers : Dealer[] = [];
  private role:any = JSON.parse(localStorage.getItem("currentUser")!);
  userName = this.role.userName;
  

  constructor(private service : DealerserviceService)
  {
    this.getDealers();
  }
  getDealers()
  {

    this.service.getDealers().subscribe((data) => {
      this.allDealers = data;
 });

  }

  delete(id: number){
    if(confirm("Are you sure want to delete?"))
    this.service.deleteDealer(id);
  }


}
