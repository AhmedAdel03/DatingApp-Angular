import { inject, Injectable } from '@angular/core';
import { ServiceAccount } from './service-account';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
protected accountservice=inject(ServiceAccount)
  init()
  {
    const UserString=localStorage.getItem('user');
      if(!UserString) return of(null);
      const user=JSON.parse(UserString);
      this.accountservice.CurrentUser.set(user);
      return of(null)

  }
  
}
