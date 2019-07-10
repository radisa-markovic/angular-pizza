import { createSelector } from '@ngrx/store';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { vratiSveKorisnikeUStanju, selectEntities } from '../reduceri/korisnici.reducer';
import { selectEntities as selektujNarudzbine } from '../reduceri/narudzbina.reducer';
import { UI } from '../reduceri/ui.reducer';
import { Dictionary } from '@ngrx/entity';
import { Korisnik } from 'src/app/modeli-podataka/Korisnik.model';
import { Narudzbina } from 'src/app/modeli-podataka/Narudzbina.model';
import { isObject } from 'util';

export const vratiNarudzbinePrijavljenogKorisnika = () => {
  return createSelector(
    selectUiState,
    selectEntities,
    selektujNarudzbine,
      (UIStanje: UI, korisnici: Dictionary<Korisnik>, narudzbine: Dictionary<Narudzbina>) => {
       if(isEmpty(UIStanje))
          return null;
        let rezultatSelektora: Narudzbina[] = [];
        korisnici[UIStanje.korisnickoIme].narudzbine.forEach(narudzbina => {
          rezultatSelektora.push(narudzbine[narudzbina]);
        });
        return rezultatSelektora;
      } 
  )
}
export const selectUiState = (state: GlobalnoStanjeAplikacije) => state.uiStanje;




export function isEmpty(object: any): boolean {
  if (isObject(object)) {
    if (Object.entries(object).length == 0) return true;
    else return false;
  }
  else {
    if (object == null || object == undefined || object == "") return true;
    else return false;
  }
}