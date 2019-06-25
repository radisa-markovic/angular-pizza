import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

//import { } from ;//treba mi stanje aplikacije
import * as akcijeKorisnika from '../../store/akcije/korisnici.akcije';
import { Observable } from 'rxjs';
import { Korisnik } from '../modeli/Korisnik';

@Component({
  selector: 'app-napravi-nalog',
  templateUrl: './napravi-nalog.component.html',
  styleUrls: ['./napravi-nalog.component.css']
})
export class NapraviNalogComponent implements OnInit {

  forma: FormGroup;
  ime: string;
  prezime: string;
  korisnickoIme: string;
  lozinka: string;
  porukaOGresci: string = "Označeno polje se mora ispuniti";

  constructor(private formBuilder: FormBuilder, private store: Store<any>, private router: Router) { }

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
      id: 2, //mrzi me da ubacim onu biblioteku jer sam umoran kao ker, a i glup kao jedan
      ime: ime,
      prezime: prezime,
      korisnickoIme: korisnickoIme, //ovo cu posle da stavim da bude unikatno
      lozinka: lozinka
    };
    this.store.dispatch(new akcijeKorisnika.RegistrujKorisnika(noviKorisnik));
    
    //ovo trebam da sprecim ako je korisnicko ime zauzeto, al za sada cu da ga namestim da radi
    this.router.navigate(["/prijaviSe"]);
  }
}
