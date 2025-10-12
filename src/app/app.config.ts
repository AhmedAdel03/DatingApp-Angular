import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { InitService } from '../Core/service/init-service';
import { lastValueFrom } from 'rxjs';
  export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
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
