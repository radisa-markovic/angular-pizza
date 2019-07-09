import { Component, OnInit } from '@angular/core';
import { Narudzbina } from 'src/app/modeli-podataka/Narudzbina.model';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { vratiNarudzbinePrijavljenogKorisnika } from 'src/app/store/selektori/narudzbina.selektor';

@Component({
  selector: 'app-narudzbina',
  templateUrl: './narudzbina.component.html',
  styleUrls: ['./narudzbina.component.css']
})
export class NarudzbinaComponent implements OnInit {
  narudzbine: Narudzbina[]; 

  constructor(private store: Store<GlobalnoStanjeAplikacije>) { }

  ngOnInit() {
    this.store.select(vratiNarudzbinePrijavljenogKorisnika())
        .subscribe(narudzbine => this.narudzbine = narudzbine);
  }

}
