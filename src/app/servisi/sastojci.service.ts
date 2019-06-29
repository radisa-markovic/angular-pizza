import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Sastojak } from '../modeli-podataka/Sastojak.model';

@Injectable({
  providedIn: 'root'
})
export class SastojciService {
  URLSastojaka: string = "http://localhost:3000/sastojci"; //da vidim dal ovo radi

  constructor(private httpKlijent: HttpClient) { }

  vratiSastojke(): Observable<Sastojak[]> {
    return this.httpKlijent.get<Sastojak[]>(this.URLSastojaka);
  }
}
