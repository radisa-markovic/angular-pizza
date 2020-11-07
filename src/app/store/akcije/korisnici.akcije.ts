import { createAction, props } from '@ngrx/store';
import { Korisnik } from '../../modeli-podataka/Korisnik.model';

export enum AkcijeNadKorisnicima
{
  REGISTRUJ_KORISNIKA = '[Akcije nad korisnicima] Registruj korisnika',
  REGISTRUJ_KORISNIKA_USPEH = '[Akcije nad korisnicima] Registruj korisnika uspeh',
  REGISTRUJ_KORISNIKA_NEUSPEH = '[Akcije nad korisnicima] Registruj korisnika neuspeh',
  PRIJAVI_KORISNIKA = '[Akcije nad korisnicima] Prijavi korisnika',
  PRIJAVI_KORISNIKA_POGRESNO_KORISNICKO_IME = '[Akcije nad korisnicima] Prijavi korisnika pogresno korisnicko ime',
  PRIJAVI_KORISNIKA_POGRESNA_LOZINKA = '[Akcije nad korisnicima] Prijavi korisnika pogresna lozinka',
  PRIJAVI_KORISNIKA_USPEH = '[Akcije nad korisnicima] Prijavi korisnika uspeh',
  ODJAVI_KORISNIKA = '[Akcije nad korisnicima] Odjavi korisnika',
};

export const A_RegistrujKorisnika = createAction(AkcijeNadKorisnicima.REGISTRUJ_KORISNIKA, 
                                          props<{korisnik: Korisnik}>());

export const A_RegistrujKorisnikaUspeh = createAction(AkcijeNadKorisnicima.REGISTRUJ_KORISNIKA_USPEH,
                                                      props<{korisnickoIme: string}>());

//videcu sta ovde moze da bude prop...                                                      
export const A_RegistrujKorisnikaNeuspeh = createAction(AkcijeNadKorisnicima.REGISTRUJ_KORISNIKA_NEUSPEH);
export const A_PrijaviKorisnika = createAction(AkcijeNadKorisnicima.PRIJAVI_KORISNIKA,
                                               props<{korisnickoIme: string, lozinka: string}>());
export const A_PrijaviKorisnikaPogresnoKorisnickoIme = createAction(AkcijeNadKorisnicima.PRIJAVI_KORISNIKA_POGRESNO_KORISNICKO_IME);
export const A_PrijaviKorisnikaPogresnaLozinka = createAction(AkcijeNadKorisnicima.PRIJAVI_KORISNIKA_POGRESNA_LOZINKA);
export const A_PrijaviKorisnikaUspeh = createAction(AkcijeNadKorisnicima.PRIJAVI_KORISNIKA_USPEH,
                                                    props<{korisnickoIme: string}>());
export const A_OdjaviKorisnika = createAction(AkcijeNadKorisnicima.ODJAVI_KORISNIKA);