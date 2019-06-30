import { Korisnik } from '../../modeli-podataka/Korisnik.model';
import * as akcijePica from '../akcije/pica.akcije';
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
        let { payload } = (akcija as akcijeKorisnici.RegistrujKorisnika);
        return adapter.addOne(payload, stanje);
      }

    case akcijePica.DODAJ_NOVU_PICU:
      {//moram i u efektima da uradim jedan patch
        const { korisnickoIme, novaPica } = (akcija as akcijePica.DodajNovuPicu);
        const izmene: Update<Korisnik> = {
          id: korisnickoIme,
          changes: { narudzbine: [...stanje.entities[korisnickoIme].narudzbine, novaPica.id]} 
        }
        return adapter.updateOne(izmene, stanje);
      }

    default:
        return stanje;      
  }
}

export const vratiSveKorisnikeUStanju = createFeatureSelector<KorisnickoStanje>('korisnici');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(vratiSveKorisnikeUStanju);