import { Narudzbina } from './Narudzbina.model';

export interface Korisnik {
  id: string,
  ime: string,
  prezime: string,
  korisnickoIme: string,
  lozinka: string,
  narudzbine: Narudzbina[];//ima vise smisla da ovo bude vezano za korisnika
}