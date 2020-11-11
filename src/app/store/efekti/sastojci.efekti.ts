import { Injectable } from '@angular/core';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import { SastojciService } from '../../services/sastojci.service';
import { switchMap, map } from 'rxjs/operators';
import { A_UcitajSastojke, A_UcitajSastojkeUspeh } from '../akcije/sastojci.akcije';

@Injectable()
export class SastojciEfekti {
  constructor(private akcija$: Actions, private sastojciService: SastojciService) { }

  vratiSastojkeIzBaze$ = createEffect(() => this.akcija$.pipe(
    ofType(A_UcitajSastojke),
    switchMap(() => this.sastojciService.vratiSastojke().pipe(
      map(sastojci => A_UcitajSastojkeUspeh({sastojci}) )
    )
    )
  )
  );

}