import { Korisnik } from '../../models/Korisnik.model';
import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { A_OdjaviKorisnika, A_PrijaviKorisnikaPogresnaLozinka, A_PrijaviKorisnikaPogresnoKorisnickoIme, A_PrijaviKorisnikaUspeh, A_RegistrujKorisnikaNeuspeh, A_RegistrujKorisnikaUspeh } from '../akcije/korisnici.akcije';
import { A_DodajNovuPicu } from '../akcije/pica.akcije';

export interface KorisnickoStanje
{
  ime: string,
  prezime: string,
  korisnickoIme: string,
  idjeviNarudzbina: string[],
};

const pocetnoStanjeNovo: KorisnickoStanje = {
  ime: "",
  prezime: "",
  korisnickoIme: "",
  idjeviNarudzbina: [],
};

const korisniciReducer = createReducer<KorisnickoStanje>(pocetnoStanjeNovo,
 on(A_PrijaviKorisnikaUspeh, (stanje, {korisnik}) => ({
    ...stanje,
    ime: korisnik.ime,
    prezime: korisnik.prezime,
    korisnickoIme: korisnik.korisnickoIme,
    idjeviNarudzbina: korisnik.narudzbine
  })),
  on(A_OdjaviKorisnika, (stanje) => ({
    ...stanje,
    ime: "",
    prezime: "",
    korisnickoIme: "",
    idjeviNarudzbina: []
  })),
  on(A_DodajNovuPicu, (stanje, {novaPica}) => ({
    ...stanje,
    idjeviNarudzbina: [...stanje.idjeviNarudzbina, novaPica.id]
  }))
);

export function reducer(stanje: KorisnickoStanje, akcija: Action)
{
  return korisniciReducer(stanje, akcija);
}