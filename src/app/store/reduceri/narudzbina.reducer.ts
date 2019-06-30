import * as akcijePica from '../akcije/pica.akcije';
import * as akcijeSastojci from '../akcije/sastojci.akcije';
import * as akcijeProizvodi from '../akcije/proizvod.akcije';
import * as uuid from 'uuid';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';



export interface Narudzbina {
  id: number,
  naziv: string,
  brojKomada: number,
  cena: number,
  sastojci: string[] //identifikator dodatih sastojaka
}


export interface NarudzbineEntiteti extends EntityState<Narudzbina> { }

const adapterNarudzbina: EntityAdapter<Narudzbina> = createEntityAdapter({
  selectId: narudzbina => narudzbina.id
});

const pocetnoStanjeNarudzbina: NarudzbineEntiteti = adapterNarudzbina.getInitialState();

export function reducerNarudzbine(stanje = pocetnoStanjeNarudzbina, akcija: Action): NarudzbineEntiteti {
  switch (akcija.type) {
    case akcijePica.DODAJ_NOVU_PICU:
      {
        const { novaPica } = (akcija as akcijePica.DodajNovuPicu);
        let novaNarudzbina: Narudzbina = {
          id: novaPica.id,
          naziv: 'Pica',
          brojKomada: novaPica.brojKomada,
          cena: novaPica.ukupnaCena,
          sastojci: novaPica.sastojci
        };
        return adapterNarudzbina.addOne(novaNarudzbina, stanje);
      }

    default:
      {
        return stanje;
      }
  }
}