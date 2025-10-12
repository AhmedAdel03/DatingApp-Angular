import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { NavBar } from "../Layout/nav-bar/nav-bar";
import { User } from '../types/types';
import { ServiceAccount } from '../Core/service/service-account';
import { Home } from "../Features/home/home";
import { register } from '../Features/account/register/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit {
  private http=inject(HttpClient);
  private accountservice=inject(ServiceAccount);
  protected readonly title = 'DatingApp';
  protected Members:any;
  async ngOnInit() {
     
    
    }
   /* setCurrentUser()
    {
      const UserString=localStorage.getItem('user');
      if(!UserString) return;
      const user=JSON.parse(UserString);
      this.accountservice.CurrentUser.set(user);
    }*/

  
   
  }
  
  
  
  


