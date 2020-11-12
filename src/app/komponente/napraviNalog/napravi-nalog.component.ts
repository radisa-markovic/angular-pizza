import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import * as identifikator from 'uuid';

import { GlobalnoStanjeAplikacije } from '../../app.state';

import { Observable } from 'rxjs';
import { A_RegistrujKorisnika } from 'src/app/store/akcije/korisnici.akcije';
import { Korisnik } from 'src/app/models/Korisnik.model';

@Component({
  selector: 'app-napravi-nalog',
  templateUrl: './napravi-nalog.component.html',
  styleUrls: ['./napravi-nalog.component.css']
})
export class NapraviNalogComponent implements OnInit {
  protected forma: FormGroup;
  protected minimalnaDuzinaKorisnickoIme: number = 4;
  protected minimalnaDuzinaLozinka: number = 7;
  protected korisnickoImeJeZauzeto: boolean; //veoma odvratan kod
  public porukaOGresci: string = "Označeno polje se mora ispuniti";
  korisnickoStanje$: Observable<any>;

  constructor(private formBuilder: FormBuilder, 
              private store: Store<GlobalnoStanjeAplikacije>) 
  {
    this.korisnickoStanje$ = this.store.pipe(select(stanje => stanje.korisnici));
  }

  ngOnInit(): void 
  {
    this.korisnickoStanje$.subscribe((stanje) => {
      this.korisnickoImeJeZauzeto = stanje.korisnickoImeJeZauzeto;
    });

    this.forma = this.formBuilder.group({
      'ime': [null, Validators.required],
      'prezime': [null, Validators.required],
      'korisnickoIme': [null, Validators.compose([Validators.required, 
                                                  Validators.minLength(this.minimalnaDuzinaKorisnickoIme)])],
      'lozinka': [null, Validators.compose([Validators.required, 
                                            Validators.minLength(this.minimalnaDuzinaLozinka)])]
    });

  }

  kontrolaNijeValidna(nazivKontrole: string): boolean
  {
    return !this.forma.controls[nazivKontrole].valid && 
            this.forma.controls[nazivKontrole].touched;
  }

  registrujKorisnika(): void 
  {
    let noviKorisnik: Korisnik = this.forma.value;
    noviKorisnik.id = this.forma.controls["korisnickoIme"].value;
    noviKorisnik.narudzbine = [];//<<--- ovo je bitno jer inace nece ni postojati ovaj property kod novog..
    //.. korisnika, pa se ne mogu ni dodavati narudzbine (to forma nema)
   
    this.store.dispatch(A_RegistrujKorisnika({korisnik: noviKorisnik}));
  }

}
