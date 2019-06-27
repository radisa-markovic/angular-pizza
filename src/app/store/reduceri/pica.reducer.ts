import * as sastojciAkcije from '../akcije/sastojci.akcije';
import * as picaAkcije from '../akcije/pica.akcije';
import { Action, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Pica } from 'src/app/modeli-podataka/Pica.model';

export interface StanjePice extends EntityState<Pica> { } //sad sam napravio jednu semu
//i on je od pice napravio onu semu kao
//samo da vidim kako se ubacuju i menjaju postojece pice

export const picaAdapter: EntityAdapter<Pica> = createEntityAdapter<Pica>({
  selectId: pica => pica.id //s tim sto ovo moram da generisem dinamicki vreko onaj uuid
});

const pocetnoStanje: StanjePice = picaAdapter.getInitialState();

export function picaReducer(stanje: StanjePice = pocetnoStanje, akcija: Action): StanjePice {
  switch (akcija.type) {
    case sastojciAkcije.DODAJ_SASTOJAK:
      {
        const { sastojak } = (akcija as sastojciAkcije.DodajSastojak);
        console.log(sastojak);
        console.log(stanje);
        return;//picaAdapter.updateOne({}, stanje);, videcu posle sta i kako...
      }

    case picaAkcije.DODAJ_NOVU_PICU:
      {
        const { novaPica } = (akcija as picaAkcije.DodajNovuPicu);
        console.log(novaPica);
        return picaAdapter.addOne(novaPica, stanje);
      }

    case picaAkcije.PROMENI_VELICINU_PICE:
      {
        const { idPice, izmene } = akcija as picaAkcije.PromeniVelicinuPice;
        console.log(idPice);
        console.log(izmene);
        return picaAdapter.updateOne({id: idPice, changes: izmene}, stanje);//ovako valjda ide izmena, bem ga...
      }

    case picaAkcije.PROMENI_BROJ_KOMADA_PICE:
      {
        const { idPice, izmene } = akcija as picaAkcije.PromeniBrojKomadaPice;
        console.log(idPice);
        console.log(izmene);
        return picaAdapter.updateOne({id: idPice, changes: izmene}, stanje);
      }

    default:
      {
        console.log(stanje);
        return stanje;
      }
  }

}

export const vratiPiceSelektor = createFeatureSelector<StanjePice>('pice');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = picaAdapter.getSelectors(vratiPiceSelektor);