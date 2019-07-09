import * as akcijePica from '../akcije/pica.akcije';
import * as akcijeSastojci from '../akcije/sastojci.akcije';
import * as akcijeNarudzbine from '../akcije/narudzbina.akcije';
import * as uuid from 'uuid';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Narudzbina } from '../../modeli-podataka/Narudzbina.model';

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

    case akcijeNarudzbine.UCITAJ_SVE_NARUDZBINE_USPEH: 
    {
      const { narudzbine } = (akcija as akcijeNarudzbine.UcitajSveNarudzbineUspeh);
      return adapterNarudzbina.addAll(narudzbine, stanje);
    } 

    default:
      {
        return stanje;
      }
  }
}