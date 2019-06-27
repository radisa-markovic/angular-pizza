import { Action } from '@ngrx/store';
import { Pica } from 'src/app/modeli-podataka/Pica.model';

export const PROMENI_VELICINU_PICE: string = '[Pica] Promeni velicinu pice';
export const PROMENI_BROJ_KOMADA_PICE: string = '[Pica] Promeni broj komada pice';
export const DODAJ_NOVU_PICU: string = '[Pica] Dodaj novu picu';

export class DodajNovuPicu implements Action {
  readonly type = DODAJ_NOVU_PICU;
  constructor(public novaPica: Pica) { };
}

export class PromeniVelicinuPice implements Action {
  readonly type = PROMENI_VELICINU_PICE;
  constructor(public idPice: string, public izmene: Partial<Pica>) { }; //cenaIzabraneVelicine: number, je u Partial mislim
}

export class PromeniBrojKomadaPice implements Action {
  readonly type = PROMENI_BROJ_KOMADA_PICE;
  constructor(public idPice: string, public izmene: Partial<Pica>) { }; //novi broj komada cu tu negde da stavim
}