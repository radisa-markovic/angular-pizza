import { Action } from '@ngrx/store';
import { Korisnik } from 'src/app/forme/modeli/Korisnik';

export const UCITAJ_KORISNIKE: string = '[Korisnici] Ucitaj korisnike';
export const UCITAJ_KORISNIKE_USPEH: string = '[Korisnici] Ucitaj korisnike uspeh';
export const REGISTRUJ_KORISNIKA: string = '[Korisnici] Registruj korisnika';
export const ODJAVI_KORISNIKA: string = '[Korisnici] Odjavi korisnika';

export class UcitajKorisnike implements Action {
  readonly type = UCITAJ_KORISNIKE;
  constructor() { };
}

export class UcitajKorisnikeUspeh implements Action {
  readonly type = "[Korisnici] Ucitaj korisnike uspeh"
  constructor(public korisnici: Korisnik[]) { }
}

export class RegistrujKorisnika implements Action {
  readonly type = REGISTRUJ_KORISNIKA;
  constructor(public payload: Korisnik) { }
}

export class OdjaviKorisnika implements Action {
  readonly type = ODJAVI_KORISNIKA;
  constructor(public payload: Korisnik) { }
}
