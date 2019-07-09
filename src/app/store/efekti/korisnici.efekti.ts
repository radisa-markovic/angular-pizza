import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import * as akcijeKorisnici from '../akcije/korisnici.akcije';
import * as korisniciServis from '../../servisi/korisnici.service';
import * as akcijePica from '../akcije/pica.akcije'
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable()
export class KorisniciEfekti {
  constructor(private akcija$: Actions, private korisniciServis: korisniciServis.KorisniciService) { }

  @Effect({ dispatch: false })
  registrujKorisnikaUBazu$ = this.akcija$.pipe(
    ofType<akcijeKorisnici.RegistrujKorisnika>(akcijeKorisnici.REGISTRUJ_KORISNIKA),
    switchMap((akcija) => this.korisniciServis.upisiKorisnikaUBazu(akcija.payload))
  );

  @Effect({dispatch: false})
  dodajNarudzbinu$ = this.akcija$.pipe(
    ofType<akcijePica.UpisiPicuKodKorisnikaUBazu>(akcijePica.UPISI_PICU_KOD_KORISNIKA_U_BAZU),
    switchMap((akcija) => this.korisniciServis.dodajNarudzbinu(akcija.novaPica.id, akcija.idKorisnika))
  );

  @Effect()
  vratiKorisnikeIzBaze$ = this.akcija$.pipe(
    ofType<akcijeKorisnici.UcitajKorisnike>(akcijeKorisnici.UCITAJ_KORISNIKE),
    switchMap((akcija) => this.korisniciServis.vratiKorisnike().pipe(
      map((podatak) => new akcijeKorisnici.UcitajKorisnikeUspeh(podatak))
    ))
  );
};