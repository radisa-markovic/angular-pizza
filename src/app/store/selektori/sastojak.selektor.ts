import { Sastojak } from '../../modeli-podataka/Sastojak.model';
import { createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface SastojciStanje extends EntityState<Sastojak> { }

//ovo ne selektuje nista, bas ono nista
export const adapter: EntityAdapter<Sastojak> = createEntityAdapter<Sastojak>({
  selectId: sastojak => sastojak.naziv //najprirodnije mi dodje...
});

export const sastojakSelektor = createFeatureSelector<SastojciStanje>('sastojci');
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors(sastojakSelektor);