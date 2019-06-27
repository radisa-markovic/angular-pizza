import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import * as sastojciAkcije from '../akcije/sastojci.akcije';

import { SastojciService } from '../../servisi/sastojci.service';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable()
export class SastojciEfekti {
  constructor(private akcija$: Actions, private sastojciService: SastojciService) { }

  @Effect()
  vratiSastojkeIzBaze$ = this.akcija$.pipe(
    ofType<sastojciAkcije.UcitajSastojke>(sastojciAkcije.UCITAJ_SASTOJKE),
    switchMap(sastojci => this.sastojciService.vratiSastojke().pipe(
      // tap(sastojci => console.log(sastojci)),
      map(sastojci => new sastojciAkcije.UcitajSastojkeUspeh(sastojci))
    ))
  );

}