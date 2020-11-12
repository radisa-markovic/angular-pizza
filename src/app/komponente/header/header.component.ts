import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';

import { UI } from 'src/app/store/reduceri/ui.reducer';
import { A_OdjaviKorisnika } from 'src/app/store/akcije/korisnici.akcije';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private uiStanje$: Observable<UI>;
  uiStanje: UI;

  constructor(private router: Router, 
              private store: Store<GlobalnoStanjeAplikacije>)
  { 
    this.uiStanje$ = this.store.pipe(select(stanje => stanje.uiStanje));
  }
  
  ngOnInit() {
    this.uiStanje$.subscribe(ui => this.uiStanje = ui);
  }

  odjaviKorisnika(event: Event): void 
  {
    event.preventDefault();
    this.store.dispatch(A_OdjaviKorisnika());
    this.router.navigate(["/"]);
  }

}
