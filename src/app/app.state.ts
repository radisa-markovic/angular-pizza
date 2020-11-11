import { KorisnickoStanje } from './store/reduceri/korisnici.reducer';
import { StanjeNarudzbina } from './store/reduceri/narudzbina.reducer';
import { StanjePice } from './store/reduceri/pica.reducer';
import { SastojciStanje } from './store/reduceri/sastojci.reducer';
import { UI } from './store/reduceri/ui.reducer';

export interface GlobalnoStanjeAplikacije {
  korisnici: KorisnickoStanje,
  uiStanje: UI, //mora da se poklapa sa onim u app-module, ili tako
  picaStanje: StanjePice,
  sastojci: SastojciStanje
  narudzbine: StanjeNarudzbina,
}