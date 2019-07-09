import { Injectable } from '@angular/core';

import * as picaAkcije from '../akcije/pica.akcije';
import * as narudzbinaAkcije from '../akcije/narudzbina.akcije';

import { switchMap, map } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NarudzbinaService } from 'src/app/servisi/narudzbina.service';

@Injectable()
export class NarudzbinaEfekti {
  constructor(private akcija$: Actions, private narudzbinaService: NarudzbinaService) { }

  @Effect({ dispatch: false })
  upisiNarudzbinuUBazu = this.akcija$.pipe(
    ofType<picaAkcije.DodajNovuPicu>(picaAkcije.DODAJ_NOVU_PICU),
    switchMap((novaPica) => this.narudzbinaService.upisiNarudzbinuUBazu(
      {
        id: novaPica.novaPica.id,
        naziv: 'Pica',
        brojKomada: novaPica.novaPica.brojKomada,
        cena: novaPica.novaPica.ukupnaCena,
        sastojci: novaPica.novaPica.sastojci
      })
    )
  );

  @Effect()
  vratiNarudzbineIzBaze = this.akcija$.pipe(
    ofType<narudzbinaAkcije.UcitajSveNarudzbine>(narudzbinaAkcije.UCITAJ_SVE_NARUDZBINE),
    switchMap((narudzbine) => this.narudzbinaService.vratiNarudzbine()),
    map(narudzbine => new narudzbinaAkcije.UcitajSveNarudzbineUspeh(narudzbine))
  );

}