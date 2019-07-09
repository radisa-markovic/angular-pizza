import { Action } from '@ngrx/store';
import { Pica } from 'src/app/modeli-podataka/Pica.model';

export const PROMENI_VELICINU_PICE: string = '[Pica] Promeni velicinu pice';
export const PROMENI_BROJ_KOMADA_PICE: string = '[Pica] Promeni broj komada pice';
export const DODAJ_NOVU_PICU: string = '[Pica] Dodaj novu picu';
export const UPISI_PICU_KOD_KORISNIKA_U_BAZU: string = '[Pica] Upisi picu kod korisnika u bazu';

export class DodajNovuPicu implements Action {
  readonly type = DODAJ_NOVU_PICU;
  constructor(public korisnickoIme: string, public novaPica: Pica) { };
}

export class UpisiPicuKodKorisnikaUBazu implements Action {
  readonly type = UPISI_PICU_KOD_KORISNIKA_U_BAZU;
  constructor(public idKorisnika: string, public novaPica: Pica) {};
}

export class PromeniVelicinuPice implements Action {
  readonly type = PROMENI_VELICINU_PICE;
  constructor(public novaOsnovnaCena: number) { };
}

export class PromeniBrojKomadaPice implements Action {
  readonly type = PROMENI_BROJ_KOMADA_PICE;
  constructor(public noviBrojKomadaPice: number) { };
}