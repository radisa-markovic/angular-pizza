import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Korisnik } from '../models/Korisnik.model';
import { catchError, tap, map, switchMap } from 'rxjs/operators';
import { Narudzbina } from '../models/Narudzbina.model';

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

  dodajNarudzbinu(narudzbina: Narudzbina, korisnickoIme: string): void
  {
    //neka fora ima ako je niz narudzbina prazan, ne znam dal da saljem akciju kad se odjavljuje korisnik...
    //patch nije hteo da radi, jebem li ga sto, pa sam improvizovao sa ovim json-serverom
    this.httpKlijent.get<Korisnik[]>(`${this.putanjaDoKorisnika}/?korisnickoIme=${korisnickoIme}`).subscribe(nesto => {
      let korisnik = nesto[0];
      korisnik.narudzbine.push(narudzbina);
      this.httpKlijent.patch<Korisnik[]>(`${this.putanjaDoKorisnika}/${korisnickoIme}`, korisnik).subscribe();
    });
  }

  vratiKorisnike(): Observable<Korisnik[]> {
    return this.httpKlijent.get<Korisnik[]>(this.putanjaDoKorisnika);
  }
}
