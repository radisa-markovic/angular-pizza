import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { korisniciReducer } from './store/reduceri/korisnici.reducer'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicaComponent } from './proizvodi/komponente/pica/pica.component';
import { SastojakComponent } from './proizvodi/komponente/sastojak/sastojak.component';
import { HeaderComponent } from './stranice/header/header.component';
import { PocetnaStranicaComponent } from './stranice/pocetnaStranica/pocetna-stranica.component';
import { NapraviNalogComponent } from './forme/napraviNalog/napravi-nalog.component';
import { PrijaviSeComponent } from './forme/prijaviSe/prijavi-se.component';
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
      korisnici: korisniciReducer
    }),
    EffectsModule.forRoot([KorisniciEfekti]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
