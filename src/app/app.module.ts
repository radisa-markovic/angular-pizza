import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicaComponent } from './proizvodi/komponente/pica/pica.component';
import { SastojakComponent } from './proizvodi/komponente/sastojak/sastojak.component';

@NgModule({
  declarations: [
    AppComponent,
    PicaComponent,
    SastojakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
