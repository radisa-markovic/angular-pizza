import { Action, createReducer, on } from '@ngrx/store';
import { A_OdjaviKorisnika, 
         A_PrijaviKorisnikaPogresnaLozinka, 
         A_PrijaviKorisnikaPogresnoKorisnickoIme, 
         A_PrijaviKorisnikaUspeh
       } from '../akcije/korisnici.akcije';

export interface UI {
  nekoJePrijavljen: boolean,
  korisnickoImeJeZauzeto: boolean,
  korisnickoImeJePogresno: boolean,
  lozinkaJePogresna: boolean
}

const pocetnoStanje: UI = {
  nekoJePrijavljen: false,
  korisnickoImeJeZauzeto: false,
  korisnickoImeJePogresno: false,
  lozinkaJePogresna: false
};

const ui_reducer = createReducer<UI>(pocetnoStanje, 
  on(A_PrijaviKorisnikaPogresnoKorisnickoIme, (stanje) => ({
    ...stanje,
    korisnickoImeJePogresno: true,
    lozinkaJePogresna: false
  })),
  on(A_PrijaviKorisnikaPogresnaLozinka, (stanje) => ({
    ...stanje,
    korisnickoImeJePogresno: false,
    lozinkaJePogresna: true
  })),
  on(A_PrijaviKorisnikaUspeh, (stanje, {korisnik}) => ({
    ...stanje,
    korisnickoIme: korisnik.korisnickoIme,
    nekoJePrijavljen: true,
    korisnickoImeJePogresno: false,
    lozinkaJePogresna: false
  })),
  on(A_OdjaviKorisnika, (stanje) => ({
    ...stanje,
    nekoJePrijavljen: false,
    korisnickoImeJeZauzeto: false,
    korisnickoImeJePogresno: false,
    lozinkaJePogresna: false
  }))
);

export default function reducer(stanje: UI, akcija: Action)
{
  return ui_reducer(stanje, akcija);
}