import { KorisnickoStanje } from './store/reduceri/korisnici.reducer';
import { StanjePice } from './store/reduceri/pica.reducer';
import { SastojciStanje } from './store/reduceri/sastojci.reducer';
import { UI } from './store/reduceri/ui.reducer';

export interface GlobalnoStanjeAplikacije {
  korisnici: KorisnickoStanje,
  uiStanje: UI,
  picaStanje: StanjePice,
  sastojci: SastojciStanje
}