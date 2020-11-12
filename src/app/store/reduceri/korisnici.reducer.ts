import { Korisnik } from '../../models/Korisnik.model';
import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { A_OdjaviKorisnika, A_PrijaviKorisnikaPogresnaLozinka, A_PrijaviKorisnikaPogresnoKorisnickoIme, A_PrijaviKorisnikaUspeh, A_RegistrujKorisnikaNeuspeh, A_RegistrujKorisnikaUspeh } from '../akcije/korisnici.akcije';
import { A_DodajNovuPicu } from '../akcije/pica.akcije';
import { Narudzbina } from 'src/app/models/Narudzbina.model';
import { Pica } from 'src/app/models/Pica.model';

export interface KorisnickoStanje
{
  ime: string,
  prezime: string,
  korisnickoIme: string,
  narudzbine: Narudzbina[],
};

const pocetnoStanjeNovo: KorisnickoStanje = {
  ime: "",
  prezime: "",
  korisnickoIme: "",
  narudzbine: [],
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

const korisniciReducer = createReducer<KorisnickoStanje>(pocetnoStanjeNovo,
 on(A_PrijaviKorisnikaUspeh, (stanje, {korisnik}) => ({
    ...stanje,
    ime: korisnik.ime,
    prezime: korisnik.prezime,
    korisnickoIme: korisnik.korisnickoIme,
    narudzbine: korisnik.narudzbine
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
    narudzbine: [...stanje.narudzbine, upakujNarudzbinu(novaPica)]
  }))
);

export function reducer(stanje: KorisnickoStanje, akcija: Action)
{
  return korisniciReducer(stanje, akcija);
}