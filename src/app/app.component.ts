import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UcitajKorisnikeUspeh, UcitajKorisnike } from './store/akcije/korisnici.akcije';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restoran-kafilerija';

  constructor(private store: Store<any>) {
    this.store.dispatch(new UcitajKorisnike());
  };
}
