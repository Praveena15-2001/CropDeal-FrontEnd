import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cropdetails } from '../cropdetails/cropdetails';
import { Dealer } from './dealer';

@Injectable({
  providedIn: 'root'
})
export class DealerserviceService {

  constructor(private http : HttpClient) { 
   
  }
  getDealers():Observable <Dealer[]>{
    return this.http.get<Dealer[]>("http://localhost:2002/dealer/");
 }

getDealerById(id:number):Observable<Dealer>
{
   return this.http.get<Dealer>(`http://localhost:2002/dealer/${id}`);
}
getdealerByName(name:string):Observable<any>
{
  return this.http.get<any>(`http://localhost:2002/dealer/dealername/${name}`);
}

createDealer(payload:any):Observable<any>
{
    return this.http.post<any>(`http://localhost:2002/dealer/adddealer`,payload);
}


updateDealer(payload:any):Observable<any>
{ 
  return this.http.put<any>(`http://localhost:2002/dealer/updatedealer`, payload);

}

deleteDealer(id:number): Observable<Dealer>
{
  return this.http.delete<Dealer>(`http://localhost:2002/dealer/deletedealer/${id}`);
}

viewcrops():Observable<Cropdetails>
{
return this.http.get<Cropdetails>(`http://localhost:2002/dealer/viewcrops`);
}

addCartItem(payload:any):Observable<any>
{
  return this.http.post<any>(`http://localhost:2002/dealer/addCartItem`,payload);
}
removeCartItem(payload:any):Observable<any>
{
  return this.http.delete<any>(`http://localhost:2002/dealer/removeCartItem`,payload);
}
viewCart()
{
  return this.http.get<any>(`http://localhost:2002/dealer/viewCart`);
}
totalPrice()
{
  return this.http.get<any>(`http://localhost:2002/dealer/viewTotalPrice`);
}
}




