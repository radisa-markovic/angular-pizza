import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicaComponent } from './komponente/pica/pica.component';
import { PocetnaStranicaComponent } from './komponente/pocetnaStranica/pocetna-stranica.component';
import { NapraviNalogComponent } from './komponente/napraviNalog/napravi-nalog.component';
import { PrijaviSeComponent } from './komponente/prijaviSe/prijavi-se.component';

const routes: Routes = [
  { path: '', component: PocetnaStranicaComponent },
  { path: 'pica', component: PicaComponent },
  { path: 'napraviNalog', component: NapraviNalogComponent },
  { path: 'prijaviSe', component: PrijaviSeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
