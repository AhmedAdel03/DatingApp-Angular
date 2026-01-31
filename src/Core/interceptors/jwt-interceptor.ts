import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ServiceAccount } from '../service/service-account';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const account=inject(ServiceAccount);
  const user=account.CurrentUser();
  if(user)
  {
    req=req.clone({
      setHeaders:{
        Authorization:`Bearer ${user.token}`
      }
    }) 

  }
  return next(req);
};
