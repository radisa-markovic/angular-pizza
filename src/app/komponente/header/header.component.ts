import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';

import { UI } from 'src/app/store/reduceri/ui.reducer';
import { A_OdjaviKorisnika } from 'src/app/store/akcije/korisnici.akcije';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  uiStanje: UI;

  constructor(private router: Router, 
              private store: Store<GlobalnoStanjeAplikacije>)
  { }
  
  ngOnInit() {
    this.store.select(stanje => stanje.uiStanje)
              .subscribe(uiStanje => this.uiStanje = uiStanje);
  }

  odjaviKorisnika(event: Event): void 
  {
    event.preventDefault();
    this.store.dispatch(A_OdjaviKorisnika());
    this.router.navigate(["/"]);
  }

}
