import { Injectable } from '@angular/core';

import * as picaAkcije from '../akcije/pica.akcije';

import { switchMap, tap } from 'rxjs/operators';//videcu sta cu da ubacim
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NarudzbinaService } from 'src/app/servisi/narudzbina.service';

@Injectable()
export class NarudzbinaEfekti {
  constructor(private akcija$: Actions, private narudzbinaService: NarudzbinaService) { }

  @Effect({ dispatch: false }) //sad da od ovoga napravim proizvod
  upisiNarudzbinuUBazu = this.akcija$.pipe(
    ofType<picaAkcije.DodajNovuPicu>(picaAkcije.DODAJ_NOVU_PICU),
    switchMap((novaPica) => this.narudzbinaService.upisiNarudzbinuUBazu({
      id: novaPica.novaPica.id,
      naziv: 'Pica',
      brojKomada: novaPica.novaPica.brojKomada,
      cena: novaPica.novaPica.ukupnaCena,
      sastojci: novaPica.novaPica.sastojci
    })
    )
  );

  //ucitavanje narudzbina iz baze treba da se odvije kad se korsnik prijavi (valjda), videcu
  /* ovo mi je kocilo aplikaciju
  @Effect({ dispatch: false })
  ukloniNarudzbinuIzBaze = this.akcija$.pipe(

  );

  @Effect()
  ucitajNarudzbineKorisnika = this.akcija$.pipe(

  );*/
}