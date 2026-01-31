import { Component, inject, signal } from '@angular/core';
import { RegisterCredits } from '../../../types/types';
import { Home } from '../../home/home';
import { FormsModule } from '@angular/forms';
import { ServiceAccount } from '../../../Core/service/service-account';
import { ToastrService } from 'ngx-toastr';
import { ErrorTest } from '../../error-test/error-test';
import { ValidationService } from '../../../Core/service/validation-service';

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
  protected registedValidation=inject(ValidationService)
 Register()
{
  this.accountService.Register(this.RegisterCredits).subscribe(
    {
    next:Response=>{
       this.toaster.success('Welcome to Sweetmeet','Register Completed success')
      
    },
    error:error=> this.registedValidation.ValidationError.set(error)
    }
  )
}

}
