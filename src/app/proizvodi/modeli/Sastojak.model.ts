export interface Sastojak
{
  id: number,
  naziv: string,
  cena: number,
  [kljuc: string]: any, //ovo internet kaze da je zbog lakseg pronalazenja u bazi kasnije
}