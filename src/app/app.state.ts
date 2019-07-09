import { Korisnik } from './modeli-podataka/Korisnik.model';
import { Narudzbina } from './modeli-podataka/Narudzbina.model';
import { UI } from './store/reduceri/ui.reducer';

export interface GlobalnoStanjeAplikacije {
  korisnici: Korisnik[],
  uiStanje: UI,
  narudzbine: Narudzbina[],
  nekoJePrijavljen: boolean
}