import { Component, OnInit } from '@angular/core';
import { Sastojak } from '../../modeli-podataka/Sastojak.model';
import { SastojciService } from '../../servisi/sastojci.service';
import { Router } from '@angular/router';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { Store } from '@ngrx/store';

import * as picaAkcije from '../../store/akcije/pica.akcije';
import * as sastojakSelektor from '../../store/selektori/sastojak.selektor';
import * as proizvodAkcije from '../../store/akcije/proizvod.akcije';

@Component({
  selector: 'app-pica',
  templateUrl: './pica.component.html',
  styleUrls: ['./pica.component.css']
})
export class PicaComponent implements OnInit {
  osnovnaCena: number;
  cenaOdSastojaka: number;
  brojKomada: number;
  ukupnaCena: number;
  sastojci: Sastojak[];
  
  cekiraniSastojci: number[] = [];
  constructor(private store: Store<GlobalnoStanjeAplikacije>,
              private router: Router) { }

  ngOnInit() {
    let cekiraniRadioButton: HTMLInputElement = document.querySelector("input[name='radioButtonVelicinaPice']:checked");
    this.osnovnaCena = parseInt(cekiraniRadioButton.value);
    this.brojKomada = 1;
    this.cenaOdSastojaka = 0;
    this.ukupnaCena = this.preracunajUkupnuCenu();

    let selekcija = this.store.select(sastojakSelektor.selectAll); //ovde dobijam sastojke, pa ih iscrtavam
    selekcija.subscribe(ucitaniSastojci => {
      this.sastojci = ucitaniSastojci
    });
  }

  promeniVelicinuPice(event: Event): void {
    let radioButton: HTMLInputElement = event.target as HTMLInputElement;
    this.osnovnaCena = parseInt(radioButton.value);
    this.ukupnaCena = this.preracunajUkupnuCenu();
  }

  promeniBrojKomada(event: Event): void {
    let inputBrojKomada: HTMLInputElement = event.target as HTMLInputElement;
    let noviBrojKomada = parseInt(inputBrojKomada.value);
    if (noviBrojKomada < 1)
    { 
      this.brojKomada = 1;
      inputBrojKomada.value = '1';
    }
    else
       this.brojKomada = noviBrojKomada;
    this.ukupnaCena = this.preracunajUkupnuCenu();    
  }

  //mozda postoji i lepsa varijanta ovoga
  preracunajUkupnuCenu(): number 
  {
    return (this.osnovnaCena + this.cenaOdSastojaka) * this.brojKomada;
  }

  klikniNaSastojak(event: Event, sastojak: Sastojak): void
  {

    let cekiraniSastojak: HTMLInputElement = <HTMLInputElement>event.target;
    if(cekiraniSastojak.checked)
    {
      this.cekiraniSastojci.push(sastojak.id);
      this.cenaOdSastojaka += sastojak.cena;
      this.ukupnaCena = this.preracunajUkupnuCenu();
    }
    else
    {
      this.cekiraniSastojci = this.cekiraniSastojci.filter(identifikatori => identifikatori !== sastojak.id);
      this.cenaOdSastojaka -= sastojak.cena;
      this.ukupnaCena = this.preracunajUkupnuCenu();
    }
    console.log(this.cekiraniSastojci);
  }

  potvrdiPicu() {
    alert(`redirekcija, upis u bazu, i posle pregled porudzbine u onoj kartici, odakle se ovo iz baze vadi`);
    //ako sam danas pohvatao nesto, to je da trebam da iz baze selektujem cekirane sastojke nekako
    //pa da prosledim u ovaj mrtvi proizvod, tj u narudzbinu... nego poznavam
    //this.store.dispatch(new proizvodAkcije.DodajNoviProizvod()); //najruznija akcija koju sam napisao do sada
  }

  vratiSeNaPocetnuStranicu() {
    alert(`Vracam se na narudzbine`);
    this.router.navigate(["/naruciProizvod"]);
  }
}
