import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicaComponent } from './komponente/pica/pica.component';
import { PocetnaStranicaComponent } from './komponente/pocetnaStranica/pocetna-stranica.component';
import { NapraviNalogComponent } from './komponente/napraviNalog/napravi-nalog.component';
import { PrijaviSeComponent } from './komponente/prijaviSe/prijavi-se.component';
import { NaruciProizvodComponent } from './komponente/naruciProizvod/naruci-proizvod.component';
import { NarudzbinaComponent } from './komponente/narudzbina/narudzbina.component';

const routes: Routes = [
  { path: '', component: PocetnaStranicaComponent },
  { path: 'naruciProizvod', component: NaruciProizvodComponent },
  { path: 'naruciProizvod/pica', component: PicaComponent },
  { path: 'napraviNalog', component: NapraviNalogComponent },
  { path: 'prijaviSe', component: PrijaviSeComponent },
  { path: 'trenutnaPorudzbina', component: NarudzbinaComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
