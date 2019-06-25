import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as identifikator from 'uuid';

import { GlobalnoStanjeAplikacije } from '../../app.state';
import * as akcijeKorisnika from '../../store/akcije/korisnici.akcije';
import * as korisnickiReducer from '../../store/reduceri/korisnici.reducer';
import { Observable } from 'rxjs';
import { Korisnik } from '../modeli/Korisnik';

@Component({
  selector: 'app-napravi-nalog',
  templateUrl: './napravi-nalog.component.html',
  styleUrls: ['./napravi-nalog.component.css']
})
export class NapraviNalogComponent implements OnInit {
  korisnici: Observable<Korisnik[]>; //ovo je ono sto uzimam iz stanja

  forma: FormGroup;
  ime: string;
  prezime: string;
  korisnickoIme: string;
  lozinka: string;
  porukaOGresci: string = "Označeno polje se mora ispuniti";

  constructor(private formBuilder: FormBuilder, 
    private store: Store<GlobalnoStanjeAplikacije>, 
    private router: Router) { }

  ngOnInit() {
    this.forma = this.formBuilder.group({
      'ime': [null, Validators.required],
      'prezime': [null, Validators.required],
      'korisnickoIme': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'lozinka': [null, Validators.compose([Validators.required, Validators.minLength(7)])]
    });
  }

  registrujKorisnika(): void {
    const { ime, prezime, korisnickoIme, lozinka } = this.forma.value;

    let noviKorisnik: Korisnik = {
      id: identifikator.v4(),
      ime: ime,
      prezime: prezime,
      korisnickoIme: korisnickoIme, //ovo cu posle da stavim da bude unikatno
      lozinka: lozinka
    };
    //ovo trebam da sprecim ako je korisnicko ime zauzeto, al za sada cu da ga namestim da radi
    this.store.dispatch(new akcijeKorisnika.RegistrujKorisnika(noviKorisnik));
    this.router.navigate(["/prijaviSe"]);
  }
}
