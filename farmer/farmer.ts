import { Cropdetails } from "../cropdetails/cropdetails";
import { Address } from "./address";

export interface Farmer {
  
   farmerid:number,
   farmerName:string,
   farmerContact:string,
   address: Address,
   farmerEmail:string,
   farmerImg:string,
   farmerAbout:string,
   cropdetails?:Cropdetails[]
   

}

