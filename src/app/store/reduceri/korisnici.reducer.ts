import { Korisnik } from 'src/app/forme/modeli/Korisnik';
import * as akcijeKorisnici from '../akcije/korisnici.akcije';
import { Action } from '@ngrx/store';

export interface KorisnickoStanje {
  nizSvihKorisnika: Korisnik[]
}

const pocetnoStanje: KorisnickoStanje = {
  nizSvihKorisnika: []
};

export function korisniciReducer(stanje = pocetnoStanje, akcija: Action): KorisnickoStanje {
  switch (akcija.type) {
    case akcijeKorisnici.UCITAJ_KORISNIKE:
      {
        return {
          ...stanje,
          nizSvihKorisnika: (akcija as akcijeKorisnici.UcitajKorisnike).ucitaniKorisnici
        };
      }

    default:
      return stanje;
  }
}