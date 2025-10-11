import { Component, signal } from '@angular/core';
import { register } from '../account/register/register';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-home',
  imports: [register,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

protected registerForm=signal(false);

Setregister()
{
  this.registerForm.set(true);
}
}
