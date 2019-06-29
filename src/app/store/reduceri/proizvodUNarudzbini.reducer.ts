import * as akcijePica from '../akcije/pica.akcije';
import * as akcijeSastojci from '../akcije/sastojci.akcije';
import * as akcijeProizvodi from '../akcije/proizvod.akcije';

import { Action } from '@ngrx/store';
import { Sastojak } from 'src/app/modeli-podataka/Sastojak.model';

export interface Narudzbina {
  id: number,
  naziv: string,
  cena: number,
  proizvod: string,
  sastojci: string[] //ovde kao nemam sastojke, oni idu u porudzbinu, jebem li ga...
}

const pocetnoStanje: Narudzbina = {
  id: -12,
  naziv: '',
  cena: 0,
  proizvod: '',
  sastojci: []
}

export function reducerProizvoda(stanje = pocetnoStanje, akcija: Action): Narudzbina {
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