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
import { Narudzbina } from 'src/app/models/Narudzbina.model';
import { Pica } from 'src/app/models/Pica.model';

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
            return A_PrijaviKorisnikaUspeh({korisnik: korisnik[0]});
          }
      })
    )
    )
  )
  );

  upakujPicu(proizvod: Pica): Narudzbina
  {
    const narudzbina: Narudzbina = {
      id: proizvod.id,
      nazivProizvoda: "Pica",
      brojKomada: proizvod.brojKomada,
      cena: proizvod.ukupnaCena,
      sastojci: proizvod.sastojci
    };

    return narudzbina;
  }
  
  dodajNarudzbinu$ = createEffect(() => this.akcija$.pipe(
    ofType(A_UpisiPicuKodKorisnikaUBazu),
    tap(nesto => this.korisniciServis.dodajNarudzbinu(this.upakujPicu(nesto.novaPica), nesto.korisnickoIme))
  ), {dispatch: false});

};