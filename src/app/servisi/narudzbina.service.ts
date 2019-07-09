import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Narudzbina } from '../modeli-podataka/Narudzbina.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NarudzbinaService {
  private putanjaDoNarudzbina: string = 'http://localhost:3000/narudzbine';

  constructor(private httpKlijent: HttpClient) { }

  upisiNarudzbinuUBazu(novaNarudzbina: Narudzbina): Observable<Narudzbina> {
    return this.httpKlijent.post<Narudzbina>(this.putanjaDoNarudzbina, novaNarudzbina).pipe(
      catchError(greska => Observable.throw(greska))
    );
  }

  vratiNarudzbine(): Observable<Narudzbina[]> {
    return this.httpKlijent.get<Narudzbina[]>(this.putanjaDoNarudzbina);
  }
}
