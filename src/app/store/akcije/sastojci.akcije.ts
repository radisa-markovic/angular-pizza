import { createAction, props } from '@ngrx/store';
import { Sastojak } from '../../models/Sastojak.model';

enum AkcijeNadSastojcima
{
  UCITAJ_SASTOJKE = "[Akcije nad sastojcima] Ucitaj sastojke",
  UCITAJ_SASTOJKE_USPEH = "[Akcije nad sastojcima] Ucitaj sastojke uspeh",
  DODAJ_SASTOJAK = "[Akcije nad sastojcima] Dodaj sastojak",
  DODAJ_SASTOJAK_NA_PICU = "[Akcije nad sastojcima] Dodaj sastojak na picu",
  UKLONI_SASTOJAK_SA_PICE = "[Akcije nad sastojcima] Ukloni sastojak sa pice",
  UKLONI_SASTOJAK = "[Akcije nad sastojcima] Ukloni sastojak"
};

export const A_UcitajSastojke = createAction(AkcijeNadSastojcima.UCITAJ_SASTOJKE);
export const A_UcitajSastojkeUspeh = createAction(AkcijeNadSastojcima.UCITAJ_SASTOJKE_USPEH, 
                                                  props<{sastojci: Sastojak[]}>());
export const A_DodajSastojak = createAction(AkcijeNadSastojcima.DODAJ_SASTOJAK, 
                                            props<{noviSastojak: Sastojak}>());
export const A_DodajSastojakNaPicu = createAction(AkcijeNadSastojcima.DODAJ_SASTOJAK_NA_PICU,
                                                  props<{sastojak: Sastojak}>());
export const A_UkloniSastojakSaPice = createAction(AkcijeNadSastojcima.UKLONI_SASTOJAK_SA_PICE,
                                                   props<{sastojak: Sastojak}>());
export const A_UkloniSastojak = createAction(AkcijeNadSastojcima.UKLONI_SASTOJAK, 
                                             props<{sastojak: Sastojak}>());