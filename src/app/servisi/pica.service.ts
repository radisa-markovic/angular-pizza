import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';//nece './Observable
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Pica } from '../proizvodi/modeli/Pica.model';

@Injectable({
  providedIn: 'root'
})
export class PicaService {
  constructor(private httpKlijent: HttpClient) { }

  /*vratiSvePice(): Observable<Pica[]>
  {
    return this.httpKlijent.get<Pica[]>(URL)
               .pipe(catchError((greska: any) => Observable.throw(error.json())));
  }*/

  napraviPicu(novaPica: Pica): Observable<Pica> {
    return; /*this.httpKlijent.post<Pica>(URL, novaPica)
               .pipe(catchError((greska: any) => Observable.throw(greska.json())));
  */}

  azurirajPicu(): Observable<Pica> {
    return;//pending i za argumente i za sve
  }

  ukloniPicu(): Observable<Pica> {
    return;//pending
  }
}
