import { Action, createAction, props } from '@ngrx/store';
import { Sastojak } from '../../modeli-podataka/Sastojak.model';

export enum AkcijeNadSastojcima
{
  UCITAJ_SASTOJKE = "[Akcije nad sastojcima] Ucitaj sastojke",
  UCITAJ_SASTOJKE_USPEH = "[Akcije nad sastojcima] Ucitaj sastojke uspeh",
  DODAJ_SASTOJAK = "[Akcije nad sastojcima] Dodaj sastojak",
  UKLONI_SASTOJAK = "[Akcije nad sastojcima] Ukloni sastojak"
};

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

export const A_UcitajSastojke = createAction(AkcijeNadSastojcima.UCITAJ_SASTOJKE);
export const A_UcitajSastojkeUspeh = createAction(AkcijeNadSastojcima.UCITAJ_SASTOJKE_USPEH, 
                                                  props<{sastojci: Sastojak[]}>());
export const A_DodajSastojak = createAction(AkcijeNadSastojcima.DODAJ_SASTOJAK, 
                                            props<{noviSastojak: Sastojak}>());
export const A_UkloniSastojak = createAction(UKLONI_SASTOJAK, 
                                             props<{sastojak: Sastojak}>());