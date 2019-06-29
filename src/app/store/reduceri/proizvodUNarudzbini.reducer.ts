import * as akcijePica from '../akcije/pica.akcije';
import * as akcijeSastojci from '../akcije/sastojci.akcije';
import * as akcijeProizvodi from '../akcije/proizvod.akcije';

import { Action } from '@ngrx/store';
import { Sastojak } from 'src/app/modeli-podataka/Sastojak.model';

export interface StanjeJednogProizvoda {
  id: number,
  naziv: string,
  osnovnaCena: number //ovde kao nemam sastojke, oni idu u porudzbinu, jebem li ga...
}

const pocetnoStanje: StanjeJednogProizvoda = {
  id: -12,
  naziv: '',
  osnovnaCena: 0,
}

export function reducerProizvoda(stanje = pocetnoStanje, akcija: Action): StanjeJednogProizvoda {
  switch (akcija.type) {
    case akcijeProizvodi.DODAJ_NOVI_PROIZVOD:
      {
        console.log(stanje);
        return stanje;
      }

    default:
      {
        console.log(stanje);
        return stanje;
      }
  }
}