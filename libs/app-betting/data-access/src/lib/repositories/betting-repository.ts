import {inject} from '@angular/core';
import {BetEntity, BettingRepositoryPort} from '@org/app-betting/domain';
import {map, Observable} from 'rxjs';
import {BettingApi} from '../api';
import {BetDto} from '../dtos/bet-dto';
import {mapBetDtoToEntity} from '../mappers/bet-mapper';
export class BettingRepository extends BettingRepositoryPort {
  private readonly _api: BettingApi = inject(BettingApi);
  public getRace$(date: string, track: string, race: number): Observable<BetEntity> {
    return this._api.getRace$(date, track, race).pipe(
      map((dto: BetDto): BetEntity => {
        // transformation dto -> entity
        // mapBetDtoToEntity
        return mapBetDtoToEntity(dto);
      }),
    );

  }
}
