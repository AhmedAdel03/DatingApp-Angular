import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastrService);
  const router = inject(Router);

  return next(req).pipe(
    catchError(error => {
      switch (error.status) {
        case 400:
          if (error.error?.errors) {
            const modelState: string[] = [];
            for (const key in error.error.errors) {
              if (error.error.errors[key]) {
                modelState.push(error.error.errors[key]);
              }
            }
            return throwError(() => modelState.flat());
          } else {
            toast.error(error.error || 'Bad request');
          }
          break;

        case 401:
          toast.error('Unauthorized');
          break;

        case 404:
          router.navigateByUrl('/notFound');
          break;

        default:
          toast.error('Something went wrong');
          break;
      }

  
      return throwError(() => error);
    })
  );
};
