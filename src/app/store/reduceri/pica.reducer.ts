import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { Pica } from '../../models/Pica.model';
//import { adapter } from './korisnici.reducer';
import { A_DodajNovuPicu, A_UpisiPicuKodKorisnikaUBazu } from '../akcije/pica.akcije';
import { A_DodajSastojakNaPicu, A_UkloniSastojakSaPice } from '../akcije/sastojci.akcije';

export interface StanjePice
{
  pica: Pica
};

const pocetnoStanje: StanjePice = {
  pica: {
    id: "",
    osnovnaCena: 0,
    brojKomada: 0,
    cenaOdSastojaka: 0,
    ukupnaCena: 0,
    sastojci: []
  }
};

const reducerPice = createReducer<StanjePice>(pocetnoStanje,
  on(A_DodajNovuPicu, (stanje, {novaPica}) => ({
    ...stanje,
    pica: novaPica
  })),
  on(A_DodajSastojakNaPicu, (stanje, {sastojak}) => ({
    ...stanje,
    pica: {
      ...stanje.pica,
      cenaOdSastojaka: stanje.pica.cenaOdSastojaka + sastojak.cena,
      sastojci: [...stanje.pica.sastojci, sastojak.naziv] //aaaaa
    }
  })),
  on(A_UkloniSastojakSaPice, (stanje, {sastojak}) => ({
    ...stanje,
    pica: {
      ...stanje.pica,
      cenaOdSastojaka: stanje.pica.cenaOdSastojaka - sastojak.cena,
      sastojci: stanje.pica.sastojci.filter((nazivSastojka) => nazivSastojka !== sastojak.naziv)
    }
  })), //polu-krpljenje, mrzi me da razrajujem logiku, al da ne budu fantomski sastojci tu kad pravim novu picu
  on(A_UpisiPicuKodKorisnikaUBazu, (stanje) => ({
    ...stanje,
    pica: {
      id: "",
      osnovnaCena: 0,
      brojKomada: 0,
      cenaOdSastojaka: 0,
      ukupnaCena: 0,
      sastojci: []
    }
  })) 
);

export default function Reducer(stanje: StanjePice, akcija: Action)
{
  return reducerPice(stanje, akcija);
}