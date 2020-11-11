import { Injectable } from '@angular/core';


import { switchMap, map } from 'rxjs/operators';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { NarudzbinaService } from '../../services/narudzbina.service'
import { A_DodajNovuPicu } from '../akcije/pica.akcije';

@Injectable()
export class NarudzbinaEfekti {
  constructor(private akcija$: Actions, private narudzbinaService: NarudzbinaService) { }

  // upisiNarudzbinuUBazu = createEffect(() => this.akcija$.pipe(
  //   ofType(A_DodajNovuPicu),
  //   switchMap((novaPica) => this.narudzbinaService.upisiNarudzbinuUBazu(
  //     {
  //       id: novaPica.novaPica.id,
  //       naziv: 'Pica',
  //       brojKomada: novaPica.novaPica.brojKomada,
  //       cena: novaPica.novaPica.ukupnaCena,
  //       sastojci: novaPica.novaPica.sastojci
  //     })
  //   )
  // )
  // );

  // @Effect()
  // vratiNarudzbineIzBaze = this.akcija$.pipe(
  //   ofType<narudzbinaAkcije.UcitajSveNarudzbine>(narudzbinaAkcije.UCITAJ_SVE_NARUDZBINE),
  //   switchMap((narudzbine) => this.narudzbinaService.vratiNarudzbine()),
  //   map(narudzbine => new narudzbinaAkcije.UcitajSveNarudzbineUspeh(narudzbine))
  // );

}