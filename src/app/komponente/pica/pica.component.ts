import { Component, OnInit } from '@angular/core';
import { Sastojak } from '../../modeli-podataka/Sastojak.model';
import { SastojciService } from '../../servisi/sastojci.service';
import { Router } from '@angular/router';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { Store } from '@ngrx/store';

import * as sastojakSelektor from '../../store/selektori/sastojak.selektor';

@Component({
  selector: 'app-pica',
  templateUrl: './pica.component.html',
  styleUrls: ['./pica.component.css']
})
export class PicaComponent implements OnInit {
  osnovnaCena: number;
  sastojci: Sastojak[];

  constructor(private store: Store<GlobalnoStanjeAplikacije>
    , private sastojciService: SastojciService,
    private router: Router) { }

  ngOnInit() {
    let selekcija = this.store.select(sastojakSelektor.selectAll);
    selekcija.subscribe(ucitaniSastojci => {
      this.sastojci = ucitaniSastojci
    });
  }

  potvrdiPicu() {
    alert(`redirekcija, upis u bazu, i posle pregled porudzbine u onoj kartici, odakle se ovo iz baze vadi`);
  }

  vratiSeNaPocetnuStranicu() {
    alert(`Vracam se na pocetnu stranicu`);
    this.router.navigate(["/"]);
  }
}
