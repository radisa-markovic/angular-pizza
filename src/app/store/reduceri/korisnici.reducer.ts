import { Korisnik } from '../../modeli-podataka/Korisnik.model';
import * as akcijeKorisnici from '../akcije/korisnici.akcije';
import { Action, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';

export interface KorisnickoStanje extends EntityState<Korisnik> { }

export const adapter: EntityAdapter<Korisnik> = createEntityAdapter<Korisnik>({
  selectId: podatak => podatak.korisnickoIme
});

const pocetnoStanje: KorisnickoStanje = adapter.getInitialState();

export function korisniciReducer(stanje = pocetnoStanje, akcija: Action): KorisnickoStanje {
  switch (akcija.type) {
    case akcijeKorisnici.UCITAJ_KORISNIKE_USPEH:
      {
        return adapter.addAll((akcija as akcijeKorisnici.UcitajKorisnikeUspeh).korisnici, stanje);
      }

    case akcijeKorisnici.REGISTRUJ_KORISNIKA:
      {
        console.log(stanje);
        let { payload } = (akcija as akcijeKorisnici.RegistrujKorisnika);
        return adapter.addOne(payload, stanje);
      }

    case akcijeKorisnici.PRIJAVI_KORISNIKA:
      {
       /* const update: Update<Korisnik> = {
          id: "",
          changes: { narudzbine: [...stanje.entities[].narudzbine, ]}
        }
        adapter.updateOne(update, stanje);
        //nekako ovde trebam da promenim properti koji kaze da niko nije prijavljen, i da to gurnem u stanje
        //mozda da to zagaimpem, pa da se fokusiram na porucivanje i preracunavanje pice i ostalih stvari
        //to cu posle vecere
        return stanje;
      */}
    default:
      {
        return stanje;
      }
  }
}

export const vratiSveKorisnikeUStanju = createFeatureSelector<KorisnickoStanje>('korisnici');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(vratiSveKorisnikeUStanju);