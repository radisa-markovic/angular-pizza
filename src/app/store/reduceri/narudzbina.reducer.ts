import * as akcijePica from '../akcije/pica.akcije';
import * as akcijeSastojci from '../akcije/sastojci.akcije';
import * as akcijeProizvodi from '../akcije/proizvod.akcije';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';



export interface Narudzbina {
  id: number,
  naziv: string,
  cena: number,
  proizvod: string,
  sastojci: string[] //identifikator dodatih sastojaka
}


export interface NarudzbineEntiteti extends EntityState<Narudzbina> { }

const adapterNarudzbina: EntityAdapter<Narudzbina> = createEntityAdapter({
  selectId: narudzbina => narudzbina.id
});

const pocetnoStanjeNarudzbina: NarudzbineEntiteti = adapterNarudzbina.getInitialState();

export function reducerNarudzbine(stanje = pocetnoStanjeNarudzbina, akcija: Action): NarudzbineEntiteti {
  switch (akcija.type) {
    case akcijeProizvodi.DODAJ_NOVI_PROIZVOD: //ovde nabijem element koji dodam iz one pice mrtve
      {
        return //stanje;
      }

    default:
      {
        return stanje;
      }
  }
}