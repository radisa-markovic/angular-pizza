import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import { switchMap, map, tap } from 'rxjs/operators';
import { A_PrijaviKorisnika, 
         A_PrijaviKorisnikaPogresnaLozinka, 
         A_PrijaviKorisnikaPogresnoKorisnickoIme, 
         A_PrijaviKorisnikaUspeh, 
         A_RegistrujKorisnika, 
         A_RegistrujKorisnikaNeuspeh, 
         A_RegistrujKorisnikaUspeh 
       } from '../akcije/korisnici.akcije';
import { KorisniciService } from '../../services/korisnici.service';
import { A_UpisiPicuKodKorisnikaUBazu } from '../akcije/pica.akcije';
import { dispatch } from 'rxjs/internal/observable/pairs';

@Injectable()
export class KorisniciEfekti {
  constructor(private akcija$: Actions, 
              private korisniciServis: KorisniciService,
              private router: Router
  ) { }

  //neki tamo dan u buducnosti cu da ovo napravim bolje, videcu
  registrujKorisnikaUBazu$ = createEffect(() => this.akcija$.pipe(
        ofType(A_RegistrujKorisnika),
        switchMap(akcija => this.korisniciServis.vratiKorisnika(akcija.korisnik.korisnickoIme).pipe(
          map(korisnik => {
            if(korisnik.length !== 0)
            {
              return A_RegistrujKorisnikaNeuspeh();
            }
            else
            {
              this.korisniciServis.upisiKorisnikaUBazu(akcija.korisnik);
              alert(`Uspesna registracija korisnika`);
              this.router.navigate(["./prijaviSe"]);
              return A_RegistrujKorisnikaUspeh({korisnickoIme: akcija.korisnik.korisnickoIme});
            }
          })
        )
      ) 
    )
  );

  prijaviKorisnika$ = createEffect(() => this.akcija$.pipe(
    ofType(A_PrijaviKorisnika),
    switchMap(akcija => this.korisniciServis.vratiKorisnika(akcija.korisnickoIme).pipe(
      map(korisnik => {
        if(korisnik.length === 0)
        {
          return A_PrijaviKorisnikaPogresnoKorisnickoIme();
        }
        else
          if(korisnik[0].lozinka !== akcija.lozinka)
            return A_PrijaviKorisnikaPogresnaLozinka();
          else
          {
            alert("Uspesna prijava");
            this.router.navigate(["/naruciProizvod"])
            return A_PrijaviKorisnikaUspeh({korisnik: korisnik[0]});//da vidim dal znam da rukujem sa Partial
          }
      })
    )
    )
  )
  );

  //ovaj efekat ne salje drugu akciju, pa sam postavio dispatch: false kao drugi argument
  //aj da vidim sta se dogadja sa "tap" umesto switchMap operatora
  dodajNarudzbinu$ = createEffect(() => this.akcija$.pipe(
    ofType(A_UpisiPicuKodKorisnikaUBazu),
    tap(nesto => this.korisniciServis.dodajNarudzbinu(nesto.novaPica.id, nesto.korisnickoIme))
  ), {dispatch: false});

  // @Effect({dispatch: false})
  // dodajNarudzbinu$ = this.akcija$.pipe(
  //   ofType<akcijePica.UpisiPicuKodKorisnikaUBazu>(akcijePica.UPISI_PICU_KOD_KORISNIKA_U_BAZU),
  //   switchMap((akcija) => this.korisniciServis.dodajNarudzbinu(akcija.novaPica.id, akcija.idKorisnika))
  // );

};