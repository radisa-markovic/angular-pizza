import * as sastojciAkcije from '../akcije/sastojci.akcije';
import * as picaAkcije from '../akcije/pica.akcije';
import { Action, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { Pica } from 'src/app/modeli-podataka/Pica.model';

export interface StanjePice extends EntityState<Pica> { } //sad sam napravio jednu semu
//i on je od pice napravio onu semu kao
//samo da vidim kako se ubacuju i menjaju postojece pice

export const picaAdapter: EntityAdapter<Pica> = createEntityAdapter<Pica>({
  selectId: pica => pica.id //s tim sto ovo moram da generisem dinamicki vreko onaj uuid
});

const pocetnoStanje: StanjePice = picaAdapter.getInitialState();//dal ovde trebam da dodam mrtve sastojke?

export function picaReducer(stanje: StanjePice = pocetnoStanje, akcija: Action): StanjePice {
  switch (akcija.type) {
    default:
      {
        return stanje;
      }
  }
//mozda mi treba za ucitavanj nesto
}

export const vratiPiceSelektor = createFeatureSelector<StanjePice>('pice');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = picaAdapter.getSelectors(vratiPiceSelektor);