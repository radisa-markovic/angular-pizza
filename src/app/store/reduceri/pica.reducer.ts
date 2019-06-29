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
    case sastojciAkcije.DODAJ_SASTOJAK: //ovo kad se klikne na onaj sastojak dodje ovde
      {
        // const { sastojak } = (akcija as sastojciAkcije.DodajSastojak);
        // const apdejt: Update<Pica> = {
        //   id: 
        // }
        return;//picaAdapter.updateOne({changes: sastojak}, stanje);
      }

    case picaAkcije.DODAJ_NOVU_PICU:
      {
        const { novaPica } = (akcija as picaAkcije.DodajNovuPicu);
        return picaAdapter.addOne(novaPica, stanje);
      }

    case picaAkcije.PROMENI_VELICINU_PICE:
      {
        // const { idPice, izmene } = akcija as picaAkcije.PromeniVelicinuPice;
        return stanje;//picaAdapter.updateOne({id: idPice, changes: izmene}, stanje);//ovako valjda ide izmena, bem ga...
      }

    case picaAkcije.PROMENI_BROJ_KOMADA_PICE:
      {
        // const { idPice, izmene } = akcija as picaAkcije.PromeniBrojKomadaPice;
        // console.log(idPice);
        // console.log(izmene);
        // return picaAdapter.updateOne({id: idPice, changes: izmene}, stanje);
        return stanje;
      }

    default:
      {
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