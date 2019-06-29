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
  sastojci: Sastojak[]; //svi sastojci ikad u istoriji (forma je u ptanju)
  //u store valjda na klik trebam da prosledim kliknutu stvar
  //da li to znaci da ove promenljive komponente i u store-u nisu obavezno isto? valjda

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

  //on change je za radio button, ovde bi trebalo da pokupim vrednost za prikaz, a i da bacim akciju...
  //...koja ce da ode u store
  promeniVelicinuPice(event: Event): void {
    let radioButton: HTMLInputElement = event.target as HTMLInputElement;//bez ovoga typescript smara
    this.osnovnaCena = parseInt(radioButton.value); //nemam bacanja akcije nidje
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
       this.brojKomada = noviBrojKomada; //al sam pametan majku mu
    this.ukupnaCena = this.preracunajUkupnuCenu();    
  }

  preracunajUkupnuCenu(): number 
  {
    return (this.osnovnaCena + this.cenaOdSastojaka) * this.brojKomada; //sastojci?
  }

  klikniNaSastojak(event: Event, sastojak: Sastojak): void
  {
    console.log(event);
    console.log(sastojak);
    let cekiraniSastojak: HTMLInputElement = <HTMLInputElement>event.target;//druga vrsta cast-ovanja
    console.log(cekiraniSastojak);
    if(!cekiraniSastojak.checked) //fora je sto se klik registruje za sve, ne samo checkbox, tj klik se dodaje svemu
    {
      this.cenaOdSastojaka += sastojak.cena;
      this.ukupnaCena = this.preracunajUkupnuCenu();//mozda void?
    }
    else
    {
      this.cenaOdSastojaka -= sastojak.cena;
      this.ukupnaCena = this.preracunajUkupnuCenu();
    }
  }

  potvrdiPicu() {
    alert(`redirekcija, upis u bazu, i posle pregled porudzbine u onoj kartici, odakle se ovo iz baze vadi`);
    //ako sam danas pohvatao nesto, to je da trebam da iz baze selektujem cekirane sastojke nekako
    //pa da prosledim u ovaj mrtvi proizvod, tj u narudzbinu... nego poznavam
    this.store.dispatch(new proizvodAkcije.DodajNoviProizvod()); //najruznija akcija koju sam napisao do sada
  }

  vratiSeNaPocetnuStranicu() {
    alert(`Vracam se na pocetnu stranicu`);
    this.router.navigate(["/naruciProizvod"]);
  }
}
