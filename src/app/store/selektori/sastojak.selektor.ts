import { Sastojak } from '../../modeli-podataka/Sastojak.model';
import { createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface SastojciStanje extends EntityState<Sastojak> { }

export const adapter: EntityAdapter<Sastojak> = createEntityAdapter<Sastojak>({
  selectId: sastojak => sastojak.naziv
});

export const sastojakSelektor = createFeatureSelector<SastojciStanje>('sastojci');
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors(sastojakSelektor);