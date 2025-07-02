import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Farmer } from './farmer';
import { Observable } from 'rxjs';
import { Cropdetails } from '../cropdetails/cropdetails';
@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http : HttpClient) { 
   
  }
  getFarmers():Observable <Farmer[]>{
    return this.http.get<Farmer[]>("http://localhost:2001/farmer/");
 }

getFarmerById(id:number):Observable<Farmer>
{
   return this.http.get<Farmer>(`http://localhost:2001/farmer/${id}`);
}

createFarmer(payload:any):Observable<any>
{
    return this.http.post<any>(`http://localhost:2001/farmer/addfarmer`,payload);
}


updateFarmer(payload:any):Observable<any>
{ 
  return this.http.put<any>(`http://localhost:2001/farmer/updatefarmer`, payload);

}

deleteFarmer(id:number): Observable<Farmer>
{
  return this.http.delete<Farmer>(`http://localhost:2001/farmer/deletefarmer/${id}`);
}

addCrop(payload:any,name:string) : Observable<any>
{
    return this.http.post<any>(`http://localhost:2001/farmer/addcrop/${name}`,payload)
}

getFarmerByName(name:string):Observable<any>
{
  return this.http.get<any>(`http://localhost:2001/farmer/farmername/${name}`);
}

updateCrop(payload:any,name:string) : Observable<any>
{
    return this.http.put<any>(`http://localhost:2001/farmer/updatecrop/${name}`,payload)
}
deleteCrop(name:string,id:number) : Observable<Cropdetails>
{
  return this.http.delete<Cropdetails>(`http://localhost:2001/farmer/deletecrop/${name}/${id}`)
}


}


