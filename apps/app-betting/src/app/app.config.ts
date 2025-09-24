import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {
  API_BASE_URL_OFF_TRACK_BETTING_TOKEN,
  baseUrlInterceptor
} from '@org/app-betting/data-access';

import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideHttpClient(withInterceptors([baseUrlInterceptor])),
    {provide: API_BASE_URL_OFF_TRACK_BETTING_TOKEN, useValue: 'https://otb-gw.prod.rushracing.app'}
  ]
};
