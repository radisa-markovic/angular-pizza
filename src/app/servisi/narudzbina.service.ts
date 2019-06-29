import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Narudzbina } from '../store/reduceri/narudzbina.reducer';
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

  //koja je fora sa ovim: ja sad imam korisnika kao entitet, koji u sebi ima niz identifikatora ovih narudzbina
  //sad, dal da vracam sve pa onda da filtriram (verovatno nije pametno), il nekako da posaljem akciju...
  //...klikom na narudzbine koja ce da iz Store-a da izvuce trazene identifikatore, pa da ih nacrta
  //...morao bih da vidim to nekako, al to cu sutra, nemam koncentracije sad, a u medjuvremenu mogu da
  //...se pozabavim dizajnom
  vratiNarudzbineKorisnika(idKorisnika: string): Observable<Narudzbina[]> {
    return;
  }
}
