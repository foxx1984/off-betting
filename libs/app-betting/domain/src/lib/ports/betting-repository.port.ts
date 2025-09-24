import {Observable} from "rxjs";

export abstract class BettingRepositoryPort {
  abstract get$(id: string): Observable<unknown[]>;
}
