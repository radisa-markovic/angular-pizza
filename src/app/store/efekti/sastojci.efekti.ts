import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import * as sastojciAkcije from '../akcije/sastojci.akcije';

import { SastojciService } from '../../servisi/sastojci.service';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class SastojciEfekti {
  constructor(private akcija$: Actions, private sastojciService: SastojciService) { }

  @Effect() //ovo radi, al da vidim kako je spojeno sa picom...
  vratiSastojkeIzBaze$ = this.akcija$.pipe(
    ofType<sastojciAkcije.UcitajSastojke>(sastojciAkcije.UCITAJ_SASTOJKE),
    switchMap(sastojci => this.sastojciService.vratiSastojke().pipe(
      map(sastojci => new sastojciAkcije.UcitajSastojkeUspeh(sastojci))
    ))
  );

}