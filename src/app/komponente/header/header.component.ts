import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { Store } from '@ngrx/store';

import { UI } from 'src/app/store/reduceri/ui.reducer';
import * as akcijeKorisnika from '../../store/akcije/korisnici.akcije';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  uiStanje: UI;

  constructor(private router: Router, private store: Store<GlobalnoStanjeAplikacije>) {
    let uiStanjeIzStore = this.store.select('uiStanje');
    uiStanjeIzStore.subscribe(uiStanje => this.uiStanje = uiStanje);
  }

  ngOnInit() {
  }

  odjaviKorisnika(event: Event): void {
    event.preventDefault();
    this.store.dispatch(new akcijeKorisnika.OdjaviKorisnika());
    this.router.navigate(["/"]); //nek ide na pocetnu npr
  }

}
