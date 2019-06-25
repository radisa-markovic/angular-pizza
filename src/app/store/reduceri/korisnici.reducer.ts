import { Korisnik } from 'src/app/forme/modeli/Korisnik';
import * as akcijeKorisnici from '../akcije/korisnici.akcije';
import { Action, createFeatureSelector, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

//ovde sam dodao dosta ovih [] za nizove
export interface KorisnickoStanje extends EntityState<Korisnik> { }

export const adapter: EntityAdapter<Korisnik> = createEntityAdapter<Korisnik>({
  selectId: nekiDjavo => nekiDjavo.id
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
        console.log(stanje); //dodao je samo jednog
        console.log((akcija as akcijeKorisnici.RegistrujKorisnika).payload);
        return adapter.addOne((akcija as akcijeKorisnici.RegistrujKorisnika).payload, stanje);
      }

    default: 
      {
        console.log(stanje);
        return stanje;
      }
  }
}

//sad da napravim selektore
//export const selektorStanjaKorisnika = createFeatureSelector<KorisnickoStanje>('korisnik');//valjda se ovako zove u onom forRoot

/* mozda zajebava, ne znam zasto
export const {
  selectAll //ne mogu da ubacujem "srpske" nazive, ovo su njihovi fabricki
} = adapter.getSelectors(selektorStanjaKorisnika);
*/
