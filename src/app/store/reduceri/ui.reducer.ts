import * as akcijeKorisnici from '../akcije/korisnici.akcije';
import { Action } from '@ngrx/store';

export interface UI {
  nekoJePrijavljen: boolean,
  idPrijavljenogKorisnika: string,
  korisnickoIme: string,
  narudzbineKorisnika: string[]
}

const pocetnoStanje: UI = {
  nekoJePrijavljen: false,
  idPrijavljenogKorisnika: '',
  korisnickoIme: '',
  narudzbineKorisnika: []
};

export function uiReducer(stanje = pocetnoStanje, akcija: Action): UI {
  switch (akcija.type) {
    case akcijeKorisnici.PRIJAVI_KORISNIKA:
      {
        const { korisnik } = (akcija as akcijeKorisnici.PrijaviKorisnika);
        return {
          ...stanje,
          nekoJePrijavljen: true,
          idPrijavljenogKorisnika: korisnik.id,
          korisnickoIme: korisnik.korisnickoIme,
          narudzbineKorisnika: korisnik.narudzbine
        };
      }
    case akcijeKorisnici.ODJAVI_KORISNIKA:
      {
        return {
          ...stanje,
          nekoJePrijavljen: false,
          idPrijavljenogKorisnika: '',
          korisnickoIme: ''
        };
      }

    default:
      return stanje;
  }
}