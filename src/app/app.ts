import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { NavBar } from "../Layout/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http=inject(HttpClient);
  protected readonly title = 'DatingApp';
  protected Members:any;
  async ngOnInit() {
   return this.Members= await this.getMembers();
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
  
  
  
  


