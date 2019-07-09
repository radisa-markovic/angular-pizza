import { Component, OnInit } from '@angular/core';
import { Sastojak } from '../../modeli-podataka/Sastojak.model';
import { SastojciService } from '../../servisi/sastojci.service';
import { Router } from '@angular/router';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { Store } from '@ngrx/store';

import * as picaAkcije from '../../store/akcije/pica.akcije';
import * as sastojakSelektor from '../../store/selektori/sastojak.selektor';
import * as proizvodAkcije from '../../store/akcije/narudzbina.akcije';
import * as uuid from 'uuid';
import { Pica } from 'src/app/modeli-podataka/Pica.model';

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
  
  cekiraniSastojci: string[] = []; // ovde ubacujem identifikatore koji su brojevi, mozda bolje string da bude
  constructor(private store: Store<GlobalnoStanjeAplikacije>,
              private router: Router) { }

  ngOnInit() {
    let cekiraniRadioButton: HTMLInputElement = document.querySelector("input[name='radioButtonVelicinaPice']:checked");
    this.osnovnaCena = parseInt(cekiraniRadioButton.value);
    this.brojKomada = 1;
    this.cenaOdSastojaka = 0;
    this.ukupnaCena = this.preracunajUkupnuCenu();

    let selekcija = this.store.select(sastojakSelektor.selectAll);
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
      this.cekiraniSastojci.push(sastojak.naziv);
      this.cenaOdSastojaka += sastojak.cena;
      this.ukupnaCena = this.preracunajUkupnuCenu();
    }
    else
    {
      this.cekiraniSastojci = this.cekiraniSastojci.filter(identifikatori => identifikatori !== sastojak.naziv);
      this.cenaOdSastojaka -= sastojak.cena;
      this.ukupnaCena = this.preracunajUkupnuCenu();
    }
    console.log(this.cekiraniSastojci);
  }

  potvrdiPicu(): void {
    let novaPica: Pica = {
      id: uuid.v4(), 
      brojKomada: this.brojKomada,
      osnovnaCena: this.osnovnaCena,
      ukupnaCena: this.ukupnaCena,
      sastojci: this.cekiraniSastojci
    };
    let idKorisnika: string, korisnickoIme: string;
    this.store.select('uiStanje').subscribe(uiInfo => {
      idKorisnika = uiInfo.idPrijavljenogKorisnika;
      korisnickoIme = uiInfo.korisnickoIme;
    });
    
    console.log(korisnickoIme);

    this.store.dispatch(new picaAkcije.DodajNovuPicu(korisnickoIme, novaPica));//mozda da ovde napravim novu akciju koju ce da efekat slusa
    this.store.dispatch(new picaAkcije.UpisiPicuKodKorisnikaUBazu(idKorisnika, novaPica));//ovo sad da napravim
    alert(`Narudžbina je uspešno dodata`);
    this.router.navigate(["/naruciProizvod"]);
  }

  vratiSeNaPocetnuStranicu(): void {
    this.router.navigate(["/naruciProizvod"]);
  }
}
