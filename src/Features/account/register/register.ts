import { Component, inject } from '@angular/core';
import { RegisterCredits } from '../../../types/types';
import { Home } from '../../home/home';
import { FormsModule } from '@angular/forms';
import { ServiceAccount } from '../../../Core/service/service-account';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class register {
  protected toaster=inject(ToastrService)
  protected accountService=inject(ServiceAccount)
 protected RegisterCredits={} as RegisterCredits
Register()
{
  this.accountService.Register(this.RegisterCredits).subscribe(
    {
    next:Response=>{
       this.toaster.success('Welcome to Sweetmeet','Register Completed success')
      
    },
    error:error=>this.toaster.warning('Check password It Should have a length from 10-16','Register Credits Wrong')
    }
  )
}

}
