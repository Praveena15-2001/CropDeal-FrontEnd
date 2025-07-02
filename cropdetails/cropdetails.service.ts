import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cropdetails } from './cropdetails';

@Injectable({
  providedIn: 'root'
})
export class CropdetailsService {


  constructor(private http : HttpClient) { 
   
  }
  getCrops():Observable <Cropdetails[]>{
    return this.http.get<Cropdetails[]>("http://localhost:2003/cropdetails/");
 }

getCropById(id:number):Observable<Cropdetails>
{
   return this.http.get<Cropdetails>(`http://localhost:2003/cropdetails/${id}`);
}




updateCrop(payload:any):Observable<any>
{ 
  return this.http.put<any>(`http://localhost:2003/cropdetails/updatecrop`, payload);

}

deleteCrop(id:number): Observable<Cropdetails>
{
  return this.http.delete<Cropdetails>(`http://localhost:2003/cropdetails/deletecrop/${id}`);
}







}
