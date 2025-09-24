import {BettingRepositoryPort} from '@org/app-betting/domain';
import {Observable} from 'rxjs';
export class BettingRepository extends BettingRepositoryPort {
  public get$(id: string): Observable<unknown[]> {
    throw new Error('Method not implemented.');
  }

}
