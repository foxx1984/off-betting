import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({providedIn: 'root'})

@Injectable({
  providedIn: 'root'
})
export class BettingApi {
  private readonly _http: HttpClient = inject(HttpClient);

  public get$(id: string): Observable<unknown[]> {
    throw new Error('Method not implemented.');
  }
}