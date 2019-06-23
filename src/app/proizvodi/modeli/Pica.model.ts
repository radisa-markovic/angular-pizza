import { Sastojak } from './Sastojak.model';

export interface Pica
{
  id: number,
  osnovnaCena: number,
  sastojci: Sastojak[]
}