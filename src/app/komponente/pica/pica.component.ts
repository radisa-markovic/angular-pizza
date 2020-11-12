import { Component, OnInit } from '@angular/core';
import { Sastojak } from '../../models/Sastojak.model';
import { Router } from '@angular/router';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { select, Store } from '@ngrx/store';


import * as uuid from 'uuid';
import { Pica } from '../../models/Pica.model';
import { A_UcitajSastojke } from 'src/app/store/akcije/sastojci.akcije';
import { A_DodajNovuPicu, A_UpisiPicuKodKorisnikaUBazu } from '../../store/akcije/pica.akcije';
import { StanjePice } from 'src/app/store/reduceri/pica.reducer';
import { Observable } from 'rxjs';
import { SastojciStanje } from 'src/app/store/reduceri/sastojci.reducer';

@Component({
  selector: 'app-pica',
  templateUrl: './pica.component.html',
  styleUrls: ['./pica.component.css']
})
export class PicaComponent implements OnInit {
  osnovnaCena: number;
  cenaOdSastojaka: number;
  brojKomada: number = 1;
  sastojciNaPici: string[];

  ponudaSastojakaPice: Sastojak[] = []; //ovde je renderovanje za view
  sastojciSuUcitani: boolean = false;
  private stanjePice$: Observable<StanjePice>;
  private stanjeSastojaka$: Observable<SastojciStanje>;

  constructor(private store: Store<GlobalnoStanjeAplikacije>,
              private router: Router) 
  {
    this.stanjePice$ = this.store.pipe(
      select(stanje => stanje.picaStanje)
    );
    this.stanjeSastojaka$ = this.store.pipe(
      select(stanje => stanje.sastojci)
    );
  }

  ngOnInit() {
    //kao popravljam efikasnost, da samo jednom pozove bazu za podatke
    this.stanjeSastojaka$.subscribe((stanje) => {
      this.sastojciSuUcitani = stanje.sastojciSuUcitani;
      this.ponudaSastojakaPice = stanje.sastojci;
    });

    this.stanjePice$.subscribe((stanje) => {
      this.cenaOdSastojaka = stanje.pica.cenaOdSastojaka;
      this.sastojciNaPici = stanje.pica.sastojci;
    });

    if(!this.sastojciSuUcitani)
      this.store.dispatch(A_UcitajSastojke());

    //mora zbog osnovne cene da ovako korigujem
    let cekiraniRadioButton: HTMLInputElement = document.querySelector("input[name='radioButtonVelicinaPice']:checked");
    this.osnovnaCena = parseInt(cekiraniRadioButton.value);
    
  }

  promeniVelicinuPice(event: Event): void {
    let radioButton: HTMLInputElement = <HTMLInputElement>event.target;
    this.osnovnaCena = parseInt(radioButton.value);
  }

  promeniBrojKomada(event: Event): void {
    let inputBrojKomada = <HTMLInputElement>event.target;
    let noviBrojKomada = parseInt(inputBrojKomada.value);
    if (noviBrojKomada < 1)
    { 
      this.brojKomada = 1;
      inputBrojKomada.value = '1';
    }
    else
       this.brojKomada = noviBrojKomada;  
  }

  preracunajUkupnuCenu(): number 
  {
    return (this.osnovnaCena + this.cenaOdSastojaka) * this.brojKomada;
  }

  potvrdiPicu(): void 
  {
    let novaPica: Pica = {
      id: uuid.v4(), 
      brojKomada: this.brojKomada,
      osnovnaCena: this.osnovnaCena,
      cenaOdSastojaka: this.cenaOdSastojaka,
      ukupnaCena: this.preracunajUkupnuCenu(),
      sastojci: this.sastojciNaPici
    };
    
    let korisnickoIme: string;
    this.store.select(stanje => stanje.korisnici).subscribe(korisnikInfo => {
      korisnickoIme = korisnikInfo.korisnickoIme;
    });
    
    this.store.dispatch(A_DodajNovuPicu({novaPica}));
    this.store.dispatch(A_UpisiPicuKodKorisnikaUBazu({korisnickoIme, novaPica}));
    alert(`Narudžbina je uspešno dodata`);
    this.router.navigate(["/naruciProizvod"]);
  }

  vratiSeNaPocetnuStranicu(): void {
    this.router.navigate(["/naruciProizvod"]);
  }
}
