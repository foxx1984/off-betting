import {provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {BettingApi} from './betting-api';

describe('BettingApi', () => {
  let api: BettingApi;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BettingApi,
        provideHttpClient(),           // fournir HttpClient
        provideHttpClientTesting(),    // backend de test
      ],
    });
    api = TestBed.inject(BettingApi);
    httpMock = TestBed.inject(HttpTestingController);


  }
  );

  it('should be created', () => {
    expect(api).toBeTruthy();
  });
});