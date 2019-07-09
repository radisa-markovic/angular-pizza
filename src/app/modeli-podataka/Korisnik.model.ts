export interface Korisnik {
  id: string,
  ime: string,
  prezime: string,
  korisnickoIme: string,
  lozinka: string,
  narudzbine: string[];//valjda je ovo ispravan tip za identifikatore narudzbina
}