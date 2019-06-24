import { Action } from '@ngrx/store';
import { Korisnik } from 'src/app/forme/modeli/Korisnik';

export const UCITAJ_KORISNIKE: string = '[Korisnici] Ucitaj korisnike';
export const REGISTRUJ_KORISNIKA: string = '[Korisnici] Registruj korisnika';
export const ODJAVI_KORISNIKA: string = '[Korisnici] Odjavi korisnika';

//sami kreatori akcije su klase, s tim sto sad nesto mogu da probam kao, tj ovaj payload
export class UcitajKorisnike implements Action {
  readonly type = UCITAJ_KORISNIKE;
  constructor(public ucitaniKorisnici: Korisnik[]) { };
}

export class RegistrujKorisnika implements Action {
  readonly type = REGISTRUJ_KORISNIKA;
  constructor(public payload: Korisnik) { }
}

export class OdjaviKorisnika implements Action {
  readonly type = ODJAVI_KORISNIKA;
  constructor(public payload: Korisnik) { }
}
