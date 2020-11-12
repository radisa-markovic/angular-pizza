import { Component, OnInit } from '@angular/core';
import { Narudzbina } from '../../models/Narudzbina.model';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KorisnickoStanje } from 'src/app/store/reduceri/korisnici.reducer';
import { UI } from 'src/app/store/reduceri/ui.reducer';
//import { vratiNarudzbinePrijavljenogKorisnika } from 'src/app/store/selektori/narudzbina.selektor';

@Component({
  selector: 'app-narudzbina',
  templateUrl: './narudzbina.component.html',
  styleUrls: ['./narudzbina.component.css']
})
export class NarudzbinaComponent implements OnInit {
  private korisnickoStanje$: Observable<KorisnickoStanje>;
  narudzbine: Narudzbina[] = [];

  constructor(private store: Store<GlobalnoStanjeAplikacije>) 
  {
    this.korisnickoStanje$ = this.store.pipe(select(stanje => stanje.korisnici));
  }

  ngOnInit() {
    this.korisnickoStanje$.subscribe(korisnickoStanje => this.narudzbine = korisnickoStanje.narudzbine);
  }

}
