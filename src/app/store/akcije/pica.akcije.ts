import { createAction, props } from '@ngrx/store';
import { Pica } from '../../models/Pica.model';

enum AkcijeNadPicama
{
  PROMENI_VELICINU_PICE = "[Pica] Promeni velicinu pice",
  PROMENI_BROJ_KOMADA_PICE = "[Pica] Promeni broj komada pice",
  DODAJ_NOVU_PICU = "[Pica] Dodaj novu picu",
  UPISI_PICU_KOD_KORISNIKA_U_BAZU = "[Pica] Upisi picu kod korisnika u bazu"
};

export const A_DodajNovuPicu = createAction(AkcijeNadPicama.DODAJ_NOVU_PICU, 
                                            props<{novaPica: Pica}>());
export const A_UpisiPicuKodKorisnikaUBazu = createAction(AkcijeNadPicama.UPISI_PICU_KOD_KORISNIKA_U_BAZU,
                                                         props<{korisnickoIme: string, novaPica: Pica}>());
export const A_PromeniVelicinuPice = createAction(AkcijeNadPicama.PROMENI_VELICINU_PICE,
                                                  props<{novaOsnovnaCena: number}>());
export const A_PromeniBrojKomadaPice = createAction(AkcijeNadPicama.PROMENI_BROJ_KOMADA_PICE,
                                                    props<{noviBrojKomadad: number}>());
