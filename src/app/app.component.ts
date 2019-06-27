import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UcitajKorisnikeUspeh, UcitajKorisnike } from './store/akcije/korisnici.akcije';
import { UcitajSastojke } from './store/akcije/sastojci.akcije';
import { GlobalnoStanjeAplikacije } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restoran-kafilerija';

  constructor(private store: Store<GlobalnoStanjeAplikacije>) {
    this.store.dispatch(new UcitajKorisnike()); //i jos ovde da zapocnem ucitavanje
    this.store.dispatch(new UcitajSastojke()); //da vidim sad sto imam beskonacnu petlju
  };
}
