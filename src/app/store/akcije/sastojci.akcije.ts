import { Action } from '@ngrx/store';
import { Sastojak } from '../../modeli-podataka/Sastojak.model';

export const UCITAJ_SASTOJKE: string = '[Sastojak] Ucitaj sastojke';
export const UCITAJ_SASTOJKE_USPEH: string = '[Sastojak] Ucitaj sastojke uspeh';
export const DODAJ_SASTOJAK: string = '[Sastojak] Dodaj sastojak';
export const UKLONI_SASTOJAK: string = '[Sastojak] Ukloni sastojak';


export class UcitajSastojke implements Action {
  readonly type = UCITAJ_SASTOJKE;
  constructor() { }
}

export class UcitajSastojkeUspeh implements Action {
  readonly type = UCITAJ_SASTOJKE_USPEH;
  constructor(public sastojci: Sastojak[]) { }
}

export class DodajSastojak implements Action {
  readonly type = DODAJ_SASTOJAK;
  constructor(public sastojak: Sastojak) { }
}

export class UkloniSastojak implements Action {
  readonly type = UKLONI_SASTOJAK;
  constructor(public sastojak: Sastojak) { };
  //mozda je pametnije da se samo posalje id, al to moze i posle da se menja
}