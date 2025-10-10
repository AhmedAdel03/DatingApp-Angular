import { Component, inject, Inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceAccount } from '../../Core/service/service-account';


@Component({
  selector: 'app-nav-bar',
  imports: [FormsModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  protected accountService=inject(ServiceAccount)
  protected Credits:any ={};
   Login()
  {
   return this.accountService.Login(this.Credits).subscribe({
    next:result=>{
      console.log(result);
       this.Credits={};},
    error:error=>alert(error.message)
      

    })
  }
  logOut()
  {
    this.accountService.Logout();
  }

}
