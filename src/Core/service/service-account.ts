import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { LoginCredits, RegisterCredits, User } from '../../types/types';
import { register } from '../../Features/account/register/register';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccount {
  private http=inject(HttpClient)
  LoginUrl="https://localhost:5001/api/Account/login";
  registerUrl="https://localhost:5001/api/Account/Register"
   CurrentUser = signal<User | null>(null);
 Register(RegisterCredits:RegisterCredits)
{
 return this.http.post<User>(this.registerUrl,RegisterCredits).pipe(
    tap(user=>{
    if(user)
    {
      localStorage.setItem('user',JSON.stringify(user));
      this.CurrentUser.set(user)
    }
  })
  )
}


   Login(LoginCredits:LoginCredits)
{
   return  this.http.post<User>(this.LoginUrl,LoginCredits).pipe(
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
