import { Korisnik } from './modeli-podataka/Korisnik.model';
import { Narudzbina } from './modeli-podataka/Narudzbina.model';
import { UI } from './store/reduceri/ui.reducer';

export interface GlobalnoStanjeAplikacije {
  korisnici: Korisnik[],
  uiStanje: UI, //mora da se poklapa sa onim u app-module, ili tako
  narudzbine: Narudzbina[],
  nekoJePrijavljen: boolean
}