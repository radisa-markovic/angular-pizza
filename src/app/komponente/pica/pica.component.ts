import { Component, OnInit } from '@angular/core';
import { Sastojak } from '../../modeli-podataka/Sastojak.model';
import { SastojciService } from '../../servisi/sastojci.service';
import { Router } from '@angular/router';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { Store } from '@ngrx/store';

import * as picaAkcije from '../../store/akcije/pica.akcije';
import * as sastojakSelektor from '../../store/selektori/sastojak.selektor';

@Component({
  selector: 'app-pica',
  templateUrl: './pica.component.html',
  styleUrls: ['./pica.component.css']
})
export class PicaComponent implements OnInit {
  osnovnaCena: number;//ovo treba da pokupi vrednost sa forme
  ukupnaCena: number;//ovo se preracunava, pa se stampa na ekranu posle
  sastojci: Sastojak[];//ovo mi treba da ucita sastojke, sad, dal trebam ovo da izbacim?
  //tacnije, da napravim "element narudzbine" natklasu koja ce da hvata proizvod i sastojke?

  constructor(private store: Store<GlobalnoStanjeAplikacije>
    , private sastojciService: SastojciService,
    private router: Router) { }

  ngOnInit() {
    let selekcija = this.store.select(sastojakSelektor.selectAll); //ovde dobijam sastojke, pa ih iscrtavam
    selekcija.subscribe(ucitaniSastojci => {
      this.sastojci = ucitaniSastojci
    });
  }

  promeniVelicinuPice(event: Event): void {
    let radioButton: HTMLInputElement = event.target as HTMLInputElement;//bez ovoga typescript smara
    this.osnovnaCena = parseInt(radioButton.value);
    //1 je ovde sporna vrednost, tj hardkodovana je... mozda da ne saljem jos akciju, prvo da napravim vrednosti
   
    //djoka, nemam snage
    //this.store.dispatch(new picaAkcije.PromeniVelicinuPice('1', { osnovnaCena: novaOsnovnaVrednostPice }));
  }

  potvrdiPicu() {
    alert(`redirekcija, upis u bazu, i posle pregled porudzbine u onoj kartici, odakle se ovo iz baze vadi`);

    this.store.dispatch(new picaAkcije.DodajNovuPicu({
      id: 13,
      osnovnaCena: 400,
      nizSastojaka: [] //ovo treba da se azurira nekako, sad nemam energije da vidim kako, ode mi volja i energija u djavola
      //vtal fhai yais vaikavt wmxa aggwvnga zamxpyxnteis?
    }));
  }

  vratiSeNaPocetnuStranicu() {
    alert(`Vracam se na pocetnu stranicu`);
    this.router.navigate(["/"]);
  }
}
