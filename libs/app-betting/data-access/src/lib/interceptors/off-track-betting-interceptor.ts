import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {API_BASE_URL_OFF_TRACK_BETTING_TOKEN} from '../tokens';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const base: string = inject(API_BASE_URL_OFF_TRACK_BETTING_TOKEN);
  const isAbsolute: boolean = /^https?:\/\//i.test(req.url);
  const url: string = isAbsolute ? req.url : `${base}${req.url.startsWith('/') ? '' : '/'}${req.url}`;

  return next(req.clone({url}));
};
