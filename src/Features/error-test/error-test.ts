import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ServiceAccount } from '../../Core/service/service-account';
import { ValidationService } from '../../Core/service/validation-service';
 
@Component({
  selector: 'app-error-test',
  imports: [FormsModule,  ],
  templateUrl: './error-test.html',
  styleUrl: './error-test.css'
})
export class ErrorTest {
private http=inject(HttpClient)
protected Testvalidation=inject(ValidationService)

  geterror()
  {
      const errorUrl="https://localhost:5001/api/Account/login";
      this.http.post(errorUrl,{}).subscribe(
        {
          next:respones=>console.log(respones),
          error:error=> {
            console.log(error),
            this.Testvalidation.ValidationError.set(error)
          }
        }
      )

  }
}
