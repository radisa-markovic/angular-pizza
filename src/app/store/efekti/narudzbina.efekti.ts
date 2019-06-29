import { Injectable } from '@angular/core';

import * as picaAkcije from '../akcije/pica.akcije';

import { } from 'rxjs/operators';//videcu sta cu da ubacim
import { Actions, Effect } from '@ngrx/effects';
import { NarudzbinaService } from 'src/app/servisi/narudzbina.service';

@Injectable()
export class NarudzbinaEfekti {
  constructor(private akcija$: Actions, private narudzbinaService: NarudzbinaService) { }

  @Effect({ dispatch: false })
  upisiNarudzbinuUBazu = this.akcija$.pipe(

  );

  @Effect({ dispatch: false })
  ukloniNarudzbinuIzBaze = this.akcija$.pipe(

  );

  @Effect()
  ucitajNarudzbineKorisnika = this.akcija$.pipe(

  );
}