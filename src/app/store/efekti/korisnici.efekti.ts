import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import * as akcijeKorisnici from '../akcije/korisnici.akcije';
import * as korisniciServis from '../../servisi/korisnici.service';
import { switchMap, mergeMap, catchError, map } from 'rxjs/operators';

@Injectable()
export class KorisniciEfekti {
  constructor(private akcija$: Actions, private korisniciServis: korisniciServis.KorisniciService) { }

  @Effect({ dispatch: false })
  registrujKorisnikaUBazu$ = this.akcija$.pipe(
    ofType<akcijeKorisnici.RegistrujKorisnika>(akcijeKorisnici.REGISTRUJ_KORISNIKA),
    switchMap((akcija) => this.korisniciServis.upisiKorisnikaUBazu(akcija.payload))
  );

  @Effect()
  vratiKorisnikeIzBaze$ = this.akcija$.pipe(
    ofType<akcijeKorisnici.UcitajKorisnike>(akcijeKorisnici.UCITAJ_KORISNIKE),
    switchMap((akcija) => this.korisniciServis.vratiKorisnike().pipe(
      map((podatak) => new akcijeKorisnici.UcitajKorisnikeUspeh(podatak))
    ))
  );
};