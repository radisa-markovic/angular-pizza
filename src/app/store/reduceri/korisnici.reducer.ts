import { Korisnik } from '../../modeli-podataka/Korisnik.model';
import * as akcijeKorisnici from '../akcije/korisnici.akcije';
import { Action, createFeatureSelector, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

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
        let { payload } = (akcija as akcijeKorisnici.RegistrujKorisnika);
        console.log(payload); //morao bih da sprecim da se ovo upise, tj ono se i sprecava, al da bude unikat...
        return adapter.addOne(payload, stanje);
      }

    case akcijeKorisnici.PRIJAVI_KORISNIKA:
      {
        //nekako ovde trebam da promenim properti koji kaze da niko nije prijavljen, i da to gurnem u stanje
        //mozda da to zagaimpem, pa da se fokusiram na porucivanje i preracunavanje pice i ostalih stvari
        //to cu posle vecere
        return stanje;
      }
    default:
      {
        return stanje;
      }
  }
}

//selektori pending...
export const vratiSveKorisnikeUStanju = createFeatureSelector<KorisnickoStanje>('korisnici');//ne znam dal ovo iz store-a uzimam...
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(vratiSveKorisnikeUStanju); //i sad sam kao izvukao neki pistolj