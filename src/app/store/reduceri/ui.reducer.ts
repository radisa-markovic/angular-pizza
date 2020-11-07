import { Action, createReducer, on } from '@ngrx/store';
import { A_OdjaviKorisnika, 
         A_PrijaviKorisnikaPogresnaLozinka, 
         A_PrijaviKorisnikaPogresnoKorisnickoIme, 
         A_PrijaviKorisnikaUspeh
       } from '../akcije/korisnici.akcije';

export interface UI {
  nekoJePrijavljen: boolean,
  idPrijavljenogKorisnika: string,
  korisnickoIme: string,
  narudzbineKorisnika: string[],
  korisnickoImeJePogresno: boolean,
  lozinkaJePogresna: boolean
}

const pocetnoStanje: UI = {
  nekoJePrijavljen: false,
  idPrijavljenogKorisnika: '',
  korisnickoIme: '',
  narudzbineKorisnika: [],
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
  on(A_PrijaviKorisnikaUspeh, (stanje, {korisnickoIme}) => ({
    ...stanje,
    korisnickoIme: korisnickoIme,
    nekoJePrijavljen: true,
    korisnickoImeJePogresno: false,
    lozinkaJePogresna: false
  })),
  on(A_OdjaviKorisnika, (stanje) => ({
    ...stanje,
    korisnickoIme: '',
    nekoJePrijavljen: false
  }))
);

export default function reducer(stanje: UI, akcija: Action)
{
  return ui_reducer(stanje, akcija);
}