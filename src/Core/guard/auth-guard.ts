import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ServiceAccount } from '../service/service-account';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
  const accountservice=inject(ServiceAccount)
  const toast=inject(ToastrService)
  if(accountservice.CurrentUser())
  {
    return true;
  }
  else {
    toast.error("you need to logIn First")
    return false;
  }
};
