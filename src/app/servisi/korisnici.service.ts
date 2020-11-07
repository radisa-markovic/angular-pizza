import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Korisnik } from '../modeli-podataka/Korisnik.model';
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
    console.log(noviKorisnik);
    //moram da subscribe odradim na post kako bi radilo, jeste ruzno, al ono, ako radi-radi za sada
    this.httpKlijent.post<Korisnik>(`${this.putanjaDoKorisnika}`, noviKorisnik).subscribe();//da vidim dal radi
  }

  //moram da prati kakve podatke vraca json server
  vratiKorisnika(korisnickoIme: string): Observable<Korisnik[]>
  {
    return this.httpKlijent.get<Korisnik[]>(`${this.putanjaDoKorisnika}/?korisnickoIme=${korisnickoIme}`);
  }

  dodajNarudzbinu(idNarudzbine: string, idKorisnika: string): Observable<Korisnik> 
  {
    return this.httpKlijent.get<Korisnik>(`${this.putanjaDoKorisnika}/${idKorisnika}`).pipe(
      tap(korisnik => console.log(korisnik.narudzbine)),
      tap(korisnik => korisnik.narudzbine.push(idNarudzbine)),
      switchMap(apdejtovaniKorisnik => this.httpKlijent.put<Korisnik>(`${this.putanjaDoKorisnika}/${idKorisnika}`, apdejtovaniKorisnik))
    );
  }

  vratiKorisnike(): Observable<Korisnik[]> {
    return this.httpKlijent.get<Korisnik[]>(this.putanjaDoKorisnika);
  }
}
