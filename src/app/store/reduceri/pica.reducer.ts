import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { Pica } from '../../models/Pica.model';
//import { adapter } from './korisnici.reducer';
import { A_DodajNovuPicu } from '../akcije/pica.akcije';
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
  }))  
);

export default function Reducer(stanje: StanjePice, akcija: Action)
{
  return reducerPice(stanje, akcija);
}

// export interface StanjePice extends EntityState<Pica> { }

// export const picaAdapter: EntityAdapter<Pica> = createEntityAdapter<Pica>({
//   selectId: pica => pica.id //upotrebiti uuid
// });

// const pocetnoStanje: StanjePice = picaAdapter.getInitialState();

// export function picaReducer(stanje: StanjePice = pocetnoStanje, akcija: Action): StanjePice {
//   switch (akcija.type) {
//     default:
//       {

//         return stanje;
//       }
//   }
//   //mozda mi treba za ucitavanje necega, lako se brise ako mi ne bude bio trebao
// }

// export const vratiPiceSelektor = createFeatureSelector<StanjePice>('pice');
// export const {
//   selectIds,
//   selectEntities,
//   selectAll,
//   selectTotal
// } = picaAdapter.getSelectors(vratiPiceSelektor);