import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reduceri/korisnici.reducer'
import picaReducer from './store/reduceri/pica.reducer';
import reducerSastojaka from './store/reduceri/sastojci.reducer';
import  uiReducer from './store/reduceri/ui.reducer';

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
import { ProizvodComponent } from './komponente/proizvod/proizvod.component';
import { SendvicComponent } from './komponente/sendvic/sendvic.component';

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
    ProizvodComponent,
    SendvicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      korisnici: reducer,
      uiStanje: uiReducer,
      picaStanje: picaReducer,
      sastojci: reducerSastojaka
    }),
    EffectsModule.forRoot([KorisniciEfekti, SastojciEfekti]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
