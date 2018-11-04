import { Injectable } from '@angular/core';
import { Holding } from './holding';
import { Observable, of } from 'rxjs';
import { HOLDINGS } from './mock-holdings';

@Injectable({
  providedIn: 'root',
})
export class HoldingService {

  constructor() { }

  getHoldings(): Observable<Holding[]>{
    return of(HOLDINGS);
  }
}
