import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { InitService } from '../Core/service/init-service';
import { lastValueFrom } from 'rxjs';
import { errorInterceptInterceptor } from '../Core/interceptors/error-intercept-interceptor';
import { jwtInterceptor } from '../Core/interceptors/jwt-interceptor';
  export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([errorInterceptInterceptor,jwtInterceptor])),
    provideAnimations(),
     provideToastr({
      positionClass:"toast-top-right",
      timeOut:4000,
      preventDuplicates: true,
     }),
     provideAppInitializer(async ()=>{
      const init=inject(InitService)
      return lastValueFrom(init.init())
     })

   ]
};
