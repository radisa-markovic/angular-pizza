import { Sastojak } from '../../modeli-podataka/Sastojak.model';//treba mi reducer koji je doduse dosta prost
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import * as akcijeSastojci from '../akcije/sastojci.akcije';


export const adapterSastojaka: EntityAdapter<Sastojak> = createEntityAdapter<Sastojak>({
  selectId: sastojak => sastojak.naziv
});

export interface SastojciStanje extends EntityState<Sastojak> { }

const pocetnoStanjeSastojaka: SastojciStanje = adapterSastojaka.getInitialState();

export function reducerSastojaka(stanje = pocetnoStanjeSastojaka, akcija: Action): SastojciStanje
{
  switch(akcija.type)
  {
    case akcijeSastojci.UCITAJ_SASTOJKE_USPEH:
      {
        return adapterSastojaka.addAll((akcija as akcijeSastojci.UcitajSastojkeUspeh).sastojci, stanje);
      }

    default:
      {
        return stanje;
      }
  }
}