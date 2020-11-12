import { Sastojak } from '../../models/Sastojak.model';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { A_UcitajSastojkeUspeh } from '../akcije/sastojci.akcije';

export interface SastojciStanje
{
  sastojci: Sastojak[],
  sastojciSuUcitani: boolean
};

const pocetnoStanje: SastojciStanje = {
  sastojci: [],
  sastojciSuUcitani: false
};

const sastojciReducer = createReducer<SastojciStanje>(pocetnoStanje,
  on(A_UcitajSastojkeUspeh, (stanje, {sastojci}) => ({
    ...stanje,
    sastojci: sastojci,
    sastojciSuUcitani: true
  }))  
);

export default function Reducer(stanje: SastojciStanje, akcija: Action)
{
  return sastojciReducer(stanje, akcija);
}