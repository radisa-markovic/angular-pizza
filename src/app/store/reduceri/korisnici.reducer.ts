import { Korisnik } from '../../modeli-podataka/Korisnik.model';
import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { A_RegistrujKorisnikaNeuspeh, A_RegistrujKorisnikaUspeh } from '../akcije/korisnici.akcije';


export interface KorisnickoStanje extends EntityState<Korisnik> { }

export const adapter: EntityAdapter<Korisnik> = createEntityAdapter<Korisnik>({
  selectId: podatak => podatak.korisnickoIme
});

const pocetnoStanje: KorisnickoStanje = adapter.getInitialState();

interface NestoTamoStanje
{
  korisnik: Korisnik,
  korisnickoImeJeZauzeto: boolean
};

const pocetnoStanjeNovo: NestoTamoStanje = {
  korisnik: {
    id : "",
    ime : "",
    prezime: "",
    korisnickoIme : "",
    lozinka : "",
    narudzbine : []
  },
  korisnickoImeJeZauzeto: false
};

const korisniciReducer = createReducer<NestoTamoStanje>(pocetnoStanjeNovo,
  on(A_RegistrujKorisnikaNeuspeh, (stanje) => ({
    ...stanje, 
    korisnickoImeJeZauzeto: true
  })),
  on(A_RegistrujKorisnikaUspeh, (stanje, {korisnickoIme}) => ({
    ...stanje,
    korisnickoIme:korisnickoIme,
    korisnickoImeJeZauzeto: false
  })),  
);

export function reducer(stanje: NestoTamoStanje, akcija: Action)
{
  return korisniciReducer(stanje, akcija);
}
  // switch (akcija.type) {
  //   case akcijeKorisnici.UCITAJ_KORISNIKE_USPEH:
  //     {
  //       return adapter.addAll((akcija as akcijeKorisnici.UcitajKorisnikeUspeh).korisnici, stanje);
  //     }

  //   case akcijeKorisnici.REGISTRUJ_KORISNIKA:
  //     {
  //       let { payload } = (akcija as akcijeKorisnici.RegistrujKorisnika);
  //       return adapter.addOne(payload, stanje);
  //     }

  //   case akcijePica.DODAJ_NOVU_PICU:
  //     {
  //       const { korisnickoIme, novaPica } = (akcija as akcijePica.DodajNovuPicu);
  //       const izmene: Update<Korisnik> = {
  //         id: korisnickoIme,
  //         changes: { narudzbine: [...stanje.entities[korisnickoIme].narudzbine, novaPica.id]} 
  //       }
  //       return adapter.updateOne(izmene, stanje);
  //     }

  //   default:
  //       return stanje;      
  // }
//}

export const vratiSveKorisnikeUStanju = createFeatureSelector<KorisnickoStanje>('korisnici');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(vratiSveKorisnikeUStanju);