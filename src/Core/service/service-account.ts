import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccount {
  private http=inject(HttpClient)
  baseUrl="https://localhost:5001/api/Account/login";
   CurrentUser = signal<User | null>(null);

   Login(Credits:any)
{
   return  this.http.post<User>(this.baseUrl,Credits).pipe(
  tap(user=>{
    if(user)
    {
      this.CurrentUser.set(user)
      localStorage.setItem('user',JSON.stringify(user));
    }
  })
 )

}
Logout()
{
  localStorage.removeItem('user');
  this.CurrentUser.set(null);
}
  
}
