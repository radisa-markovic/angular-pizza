import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicaComponent } from './proizvodi/komponente/pica/pica.component';
import { PocetnaStranicaComponent } from './stranice/pocetnaStranica/pocetna-stranica.component';
import { NapraviNalogComponent } from './forme/napraviNalog/napravi-nalog.component';
import { PrijaviSeComponent } from './forme/prijaviSe/prijavi-se.component';

const routes: Routes = [
  { path: '', component: PocetnaStranicaComponent },
  { path: 'pica', component: PicaComponent },
  { path: 'napraviNalog', component: NapraviNalogComponent },
  { path: 'prijaviSe', component: PrijaviSeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
