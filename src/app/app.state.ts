import { Korisnik } from './modeli-podataka/Korisnik.model';
import { Pica } from './modeli-podataka/Pica.model';
//ako imam jos nesto da dodam ovde, neki jos atribut stanja, ovde bih ga dodao

//ne znam gde pice da ubacim...
export interface GlobalnoStanjeAplikacije {
  korisnici: Korisnik[],
  pice: Pica[]
  nekoJePrijavljen: boolean //ovo se ne vidi kako treba u devTools-u
}