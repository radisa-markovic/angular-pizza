import { Korisnik } from './modeli-podataka/Korisnik.model';
import { Narudzbina } from './store/reduceri/Narudzbina.reducer';
import { UI } from './store/reduceri/ui.reducer';
//ako imam jos nesto da dodam ovde, neki jos atribut stanja, ovde bih ga dodao

//ne znam gde pice da ubacim...
export interface GlobalnoStanjeAplikacije {
  korisnici: Korisnik[],
  UI: UI,
  narudzbine: Narudzbina[],
  nekoJePrijavljen: boolean
}