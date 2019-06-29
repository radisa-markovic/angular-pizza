import * as akcijeKorisnici from '../akcije/korisnici.akcije';
import { Action } from '@ngrx/store';

export interface UI {
  nekoJePrijavljen: boolean,
  idPrijavljenogKorisnika: string,
  korisnickoIme: string
}

const pocetnoStanje: UI = {
  nekoJePrijavljen: false,
  idPrijavljenogKorisnika: '',
  korisnickoIme: ''
};

//sad da se nekako neke komponente pretplate na ovo stanje (neki dependency injection sigurno, al selekcija...)
//moracu da pogledam opet ono citanje iz komponenti, a i da ubacim svakako u header.component.ts nesto...
export function uiReducer(stanje = pocetnoStanje, akcija: Action): UI {
  switch (akcija.type) {
    case akcijeKorisnici.PRIJAVI_KORISNIKA:
      {
        const { korisnik } = (akcija as akcijeKorisnici.PrijaviKorisnika);
        return {
          ...stanje,
          nekoJePrijavljen: true,
          idPrijavljenogKorisnika: korisnik.id,
          korisnickoIme: korisnik.korisnickoIme
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