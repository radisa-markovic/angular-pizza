import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { korisniciReducer } from './store/reduceri/korisnici.reducer'
import { picaReducer } from './store/reduceri/pica.reducer';

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
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

@NgModule({
  declarations: [
    AppComponent,
    PicaComponent,
    SastojakComponent,
    HeaderComponent,
    PocetnaStranicaComponent,
    NapraviNalogComponent,
    PrijaviSeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      korisnici: korisniciReducer, //svako mora neki svoj reducer da dobije mislim, zavisi...
      narudzbina: picaReducer,
      pice: picaReducer,
      sastojak: picaReducer
    }),
    EffectsModule.forRoot([KorisniciEfekti]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
