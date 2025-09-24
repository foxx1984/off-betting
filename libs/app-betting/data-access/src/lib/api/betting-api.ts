import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {ZodSafeParseResult} from 'Zod';
import {BetDto, betDtoSchema} from '../dtos/bet-dto';

@Injectable({providedIn: 'root'})

@Injectable({
  providedIn: 'root'
})
export class BettingApi {
  private readonly _http: HttpClient = inject(HttpClient);

  public getRace$(date: string, track: string, race: number): Observable<BetDto> {
    return this._http.get(`/adw/races/v2/${date}/${track}/${race}`).pipe(
      map((response: unknown) => {

        const parsed: ZodSafeParseResult<BetDto> = betDtoSchema.safeParse(response);

        if (!parsed.success) {
          throw new Error('Invalid response');
        }

        return parsed.data;
      })
    );
  }
}
