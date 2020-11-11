import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Korisnik } from '../models/Korisnik.model';
import { catchError, tap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {
  private putanjaDoKorisnika: string = "http://localhost:3000/korisnici";

  constructor(private httpKlijent: HttpClient) { }

  //zbog povratnog tipa ovde zeza efekat ponekad
  upisiKorisnikaUBazu(noviKorisnik: Korisnik)
  {
    //moram da subscribe odradim na post kako bi radilo, jeste ruzno, al ono, ako radi-radi za sada
    this.httpKlijent.post<Korisnik>(`${this.putanjaDoKorisnika}`, noviKorisnik).subscribe();//da vidim dal radi
  }

  //moram da pratim kakve podatke vraca json server
  vratiKorisnika(korisnickoIme: string): Observable<Korisnik[]>
  {
    return this.httpKlijent.get<Korisnik[]>(`${this.putanjaDoKorisnika}/?korisnickoIme=${korisnickoIme}`);
  }

  dodajNarudzbinu(idNarudzbine: string, korisnickoIme: string): void
  {
    //neka fora ima ako je niz narudzbina prazan, ne znam dal da saljem akciju kad se odjavljuje korisnik...
    console.log(korisnickoIme, idNarudzbine);
    this.httpKlijent.patch<Korisnik>(`${this.putanjaDoKorisnika}/?korisnickoIme=${korisnickoIme}`, 
                                      JSON.stringify({narudzbine: idNarudzbine}));
  }

  vratiKorisnike(): Observable<Korisnik[]> {
    return this.httpKlijent.get<Korisnik[]>(this.putanjaDoKorisnika);
  }
}
