import { Component, inject, Inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceAccount } from '../../Core/service/service-account';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
  

@Component({
  selector: 'app-nav-bar',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  protected accountService=inject(ServiceAccount)
  protected ToasterService=inject(ToastrService)
  protected Credits:any ={};
  private router=inject(Router)
   Login()
  {
   return this.accountService.Login(this.Credits).subscribe({
    next:result=>{
        this.router.navigateByUrl('/members')
        this.ToasterService.success("Login Success","hi",{})
      
      },
    error:error=>this.ToasterService.error(error.error)
      

    })
  }
  logOut()
  {
    this.accountService.Logout();
    this.router.navigateByUrl('/')
    this.ToasterService.show('LogOut Success')

  }

}
