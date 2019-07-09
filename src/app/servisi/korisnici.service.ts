import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Korisnik } from '../modeli-podataka/Korisnik.model';
import { catchError, tap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {
  private putanjaDoKorisnika: string = "http://localhost:3000/korisnici";

  constructor(private httpKlijent: HttpClient) { }

  upisiKorisnikaUBazu(noviKorisnik: Korisnik): Observable<Korisnik> {
    return this.httpKlijent.post<Korisnik>(this.putanjaDoKorisnika, noviKorisnik)
      .pipe(
        catchError((greska: any) => Observable.throw(greska))
      );
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
