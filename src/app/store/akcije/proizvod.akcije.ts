import { Action } from '@ngrx/store';
import { Proizvod } from 'src/app/modeli-podataka/Proizvod.model';

export const DODAJ_NOVI_PROIZVOD: string = '[Proizvod] Dodaj novi proizvod';

export class DodajNoviProizvod implements Action {
  readonly type = DODAJ_NOVI_PROIZVOD;
  constructor(public Proizvod: Proizvod) { };
}