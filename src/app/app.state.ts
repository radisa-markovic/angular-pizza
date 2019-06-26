import { Korisnik } from './forme/modeli/Korisnik';
//ako imam jos nesto da dodam ovde, neki jos atribut stanja, ovde bih ga dodao

export interface GlobalnoStanjeAplikacije {
  korisnici: Korisnik[],
  nekoJePrijavljen: boolean //ovo se ne vidi kako treba u devTools-u
}