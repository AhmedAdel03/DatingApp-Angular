import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { NavBar } from "../Layout/nav-bar/nav-bar";
import { User } from '../types/types';
import { ServiceAccount } from '../Core/service/service-account';
import { Home } from "../Features/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit {
  private http=inject(HttpClient);
  private accountservice=inject(ServiceAccount);
  protected readonly title = 'DatingApp';
  protected Members:any;
  async ngOnInit() {
     
   this.setCurrentUser();
    }
    setCurrentUser()
    {
      const UserString=localStorage.getItem('user');
      if(!UserString) return;
      const user=JSON.parse(UserString);
      this.accountservice.CurrentUser.set(user);
    }

    getMembers()
  {
  try {
     return lastValueFrom( this.http.get('https://localhost:5001/api/user'));
  } catch (error) {
   return  console.log(error)
  }
}
   
  }
  
  
  
  


