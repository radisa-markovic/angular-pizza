import * as sastojciAkcije from '../akcije/sastojci.akcije';
import * as picaAkcije from '../akcije/pica.akcije';
import { Action, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { Pica } from 'src/app/modeli-podataka/Pica.model';
import { Korisnik } from 'src/app/modeli-podataka/Korisnik.model';
import { adapter } from './korisnici.reducer';

export interface StanjePice extends EntityState<Pica> { }

export const picaAdapter: EntityAdapter<Pica> = createEntityAdapter<Pica>({
  selectId: pica => pica.id //upotrebiti uuid
});

const pocetnoStanje: StanjePice = picaAdapter.getInitialState();

export function picaReducer(stanje: StanjePice = pocetnoStanje, akcija: Action): StanjePice {
  switch (akcija.type) {
    default:
      {

        return stanje;
      }
  }
  //mozda mi treba za ucitavanje necega, lako se brise ako mi ne bude bio trebao
}

export const vratiPiceSelektor = createFeatureSelector<StanjePice>('pice');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = picaAdapter.getSelectors(vratiPiceSelektor);