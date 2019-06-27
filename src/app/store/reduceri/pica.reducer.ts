import * as sastojciAkcije from '../akcije/sastojci.akcije';
import { Sastojak } from '../../modeli-podataka/Sastojak.model';
import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Pica } from 'src/app/modeli-podataka/Pica.model';

export interface StanjePice extends EntityState<Pica> {

}

export const picaAdapter: EntityAdapter<Pica> = createEntityAdapter<Pica>({
  selectId: pica => pica.id
});

const pocetnoStanje: StanjePice = picaAdapter.getInitialState({
 
});

export function picaReducer(stanje: StanjePice = pocetnoStanje, akcija: Action): StanjePice {
  switch (akcija.type) {
    case sastojciAkcije.DODAJ_SASTOJAK:
      {
        const { sastojak } = (akcija as sastojciAkcije.DodajSastojak);
        console.log(sastojak);
        console.log(stanje);
        return ;
      }

    default:
      {
        console.log(stanje);
        return stanje;
      }
  }

}