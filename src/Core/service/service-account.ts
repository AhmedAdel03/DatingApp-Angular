import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccount {
  private http=inject(HttpClient)
  baseUrl="https://localhost:5001/api/Account/login";
  Login(Credits:any)
{
 return this.http.post(this.baseUrl,Credits)

}
  
}
