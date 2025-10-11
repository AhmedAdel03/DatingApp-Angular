import { Component, inject } from '@angular/core';
import { RegisterCredits } from '../../../types/types';
import { Home } from '../../home/home';
import { FormsModule } from '@angular/forms';
import { ServiceAccount } from '../../../Core/service/service-account';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class register {
  protected accountService=inject(ServiceAccount)
 protected RegisterCredits={} as RegisterCredits
Register()
{
  this.accountService.Register(this.RegisterCredits).subscribe(
    {
    next:Response=>{
      console.log(Response)
      
    },
    error:error=>console.log(error)
    }
  )
}

}
