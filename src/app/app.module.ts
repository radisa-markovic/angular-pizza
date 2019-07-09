import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { korisniciReducer } from './store/reduceri/korisnici.reducer'
import { reducerNarudzbine } from './store/reduceri/narudzbina.reducer';
import { reducerSastojaka } from './store/reduceri/sastojci.reducer';
import { uiReducer } from './store/reduceri/ui.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicaComponent } from './komponente/pica/pica.component';
import { SastojakComponent } from './komponente/sastojak/sastojak.component';
import { HeaderComponent } from './komponente/header/header.component';
import { PocetnaStranicaComponent } from './komponente/pocetnaStranica/pocetna-stranica.component';
import { NapraviNalogComponent } from './komponente/napraviNalog/napravi-nalog.component';
import { PrijaviSeComponent } from './komponente/prijaviSe/prijavi-se.component';
import { EffectsModule } from '@ngrx/effects';

import { KorisniciEfekti } from './store/efekti/korisnici.efekti';
import { SastojciEfekti } from './store/efekti/sastojci.efekti';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NaruciProizvodComponent } from './komponente/naruciProizvod/naruci-proizvod.component';
import { NarudzbinaComponent } from './komponente/narudzbina/narudzbina.component'
import { NarudzbinaEfekti } from './store/efekti/narudzbina.efekti';
import { ProizvodComponent } from './komponente/proizvod/proizvod.component';

@NgModule({
  declarations: [
    AppComponent,
    PicaComponent,
    SastojakComponent,
    HeaderComponent,
    PocetnaStranicaComponent,
    NapraviNalogComponent,
    PrijaviSeComponent,
    NaruciProizvodComponent,
    NarudzbinaComponent,
    ProizvodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      korisnici: korisniciReducer,
      uiStanje: uiReducer,
      narudzbina: reducerNarudzbine,
      sastojci: reducerSastojaka //ovo je popravljeno, samo efekte jos da nadjem
    }),
    EffectsModule.forRoot([KorisniciEfekti, SastojciEfekti, NarudzbinaEfekti]), //ovde stimujem efekte valjda
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
