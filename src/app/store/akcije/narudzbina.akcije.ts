import { Action } from '@ngrx/store';
import { Narudzbina } from 'src/app/modeli-podataka/Narudzbina.model';

export const UCITAJ_SVE_NARUDZBINE: string = '[Narudzbina] Ucitaj sve narudzbine';
export const UCITAJ_SVE_NARUDZBINE_USPEH: string = '[Narudzbina] Ucitaj sve narudzbine uspeh';

export class UcitajSveNarudzbine implements Action {
  readonly type = UCITAJ_SVE_NARUDZBINE;
  constructor() { }
}

export class UcitajSveNarudzbineUspeh implements Action {
  readonly type = UCITAJ_SVE_NARUDZBINE_USPEH;
  constructor(public narudzbine: Narudzbina[]) {}
}