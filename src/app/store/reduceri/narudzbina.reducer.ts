import * as uuid from 'uuid';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Narudzbina } from '../../models/Narudzbina.model';
import { A_DodajNovuPicu } from '../akcije/pica.akcije';
import { Pica } from 'src/app/models/Pica.model';

export interface StanjeNarudzbina
{
    korisnikoveNarudzbine: Narudzbina[],
    narudzbineSuUcitane: boolean
};

const pocetnoStanje: StanjeNarudzbina = {
    korisnikoveNarudzbine: [],
    narudzbineSuUcitane: false
};

function upakujNarudzbinu(proizvod: Pica): Narudzbina
{
    const narudzbina: Narudzbina = {
        id: proizvod.id,
        nazivProizvoda: "Pica",
        brojKomada: proizvod.brojKomada,
        cena: proizvod.ukupnaCena,
        sastojci: proizvod.sastojci
    };

    return narudzbina;
}

const narudzbinaReducer = createReducer<StanjeNarudzbina>(pocetnoStanje,
    on(A_DodajNovuPicu, (stanje, {novaPica}) => ({
        ...stanje,
        korisnikoveNarudzbine: [...stanje.korisnikoveNarudzbine, upakujNarudzbinu(novaPica)]
    }))    
);

export default function Reducer(stanje: StanjeNarudzbina, akcija: Action)
{
    return narudzbinaReducer(stanje, akcija);
}


// export interface NarudzbineEntiteti extends EntityState<Narudzbina> { }

// const adapterNarudzbina: EntityAdapter<Narudzbina> = createEntityAdapter({
//   selectId: narudzbina => narudzbina.id
// });

// const pocetnoStanjeNarudzbina: NarudzbineEntiteti = adapterNarudzbina.getInitialState();

// export function reducerNarudzbine(stanje = pocetnoStanjeNarudzbina, akcija: Action): NarudzbineEntiteti {
//   switch (akcija.type) {
//     case akcijePica.DODAJ_NOVU_PICU:
//       {
//         const { novaPica } = (akcija as akcijePica.DodajNovuPicu);
//         let novaNarudzbina: Narudzbina = {
//           id: novaPica.id,
//           naziv: 'Pica',
//           brojKomada: novaPica.brojKomada,
//           cena: novaPica.ukupnaCena,
//           sastojci: novaPica.sastojci
//         };
//         return adapterNarudzbina.addOne(novaNarudzbina, stanje);
//       }

//     case akcijeNarudzbine.UCITAJ_SVE_NARUDZBINE_USPEH: 
//     {
//       const { narudzbine } = (akcija as akcijeNarudzbine.UcitajSveNarudzbineUspeh);
//       return adapterNarudzbina.addAll(narudzbine, stanje);
//     } 

//     default:
//       {
//         return stanje;
//       }
//   }
// }

// export const vratiSveNarudzbineUStanju = createFeatureSelector<NarudzbineEntiteti>('narudzbina');
// export const {
//   selectIds,
//   selectEntities,
//   selectAll,
//   selectTotal
// } = adapterNarudzbina.getSelectors(vratiSveNarudzbineUStanju);