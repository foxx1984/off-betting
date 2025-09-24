import {InjectionToken} from "@angular/core";

export const API_BASE_URL_OFF_TRACK_BETTING_TOKEN: InjectionToken<string> = new InjectionToken<string>('OffTrackBettingToken', {
  providedIn: 'root',
  factory: () => 'OffTrackBettingToken'
});
