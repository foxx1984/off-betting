import {Observable} from "rxjs";
import {BetEntity} from "../entities";

export abstract class BettingRepositoryPort {
  protected abstract getRace$(date: string, track: string, race: number): Observable<BetEntity>;
}
