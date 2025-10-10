import { Component } from '@angular/core';
import { RegisterCredits } from '../../../types/types';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
protected RegisterCredits={} as RegisterCredits
Register()
{
  console.log(this.RegisterCredits);
}

}
