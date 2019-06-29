import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Korisnik } from '../../modeli-podataka/Korisnik.model';
import * as korisnickiReducer from '../../store/reduceri/korisnici.reducer';
import * as akcijeKorisnika from '../../store/akcije/korisnici.akcije';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-prijavi-se',
  templateUrl: './prijavi-se.component.html',
  styleUrls: ['./prijavi-se.component.css']
})
export class PrijaviSeComponent implements OnInit {
  forma: FormGroup;
  korisnickoIme: string;
  lozinka: string;

  korisnici: Object; //jer hocu hasOwnProperty, posto ngrx ima cele 2 prosto prosirene recenice o ovome...

  constructor(private formBuilder: FormBuilder,
    private store: Store<GlobalnoStanjeAplikacije>,
    private router: Router) { 
    this.store.select(korisnickiReducer.selectEntities).subscribe(korisnici => {
      this.korisnici = korisnici;
    });
    }

  ngOnInit() {
    this.forma = this.formBuilder.group({
      'korisnickoIme': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'lozinka': [null, Validators.compose([Validators.required, Validators.minLength(7)])]
    });
  }

  prijaviKorisnika(): void {
    const { korisnickoIme, lozinka } = this.forma.value;

    let korisnickoImeJeIspravno = this.proveriKorisnickoIme(korisnickoIme);
    let lozinkaJeIspravna = this.proveriLozinku(korisnickoIme, lozinka);

    if (korisnickoImeJeIspravno)
      alert(`Korisnik "${korisnickoIme}" postoji u bazi`);
    else
      alert(`Nepostojece korisnicko ime "${korisnickoIme}"`);

    lozinkaJeIspravna ? alert(`Ispravna je lozinka`) : alert(`Neispravna lozinka`);

    if (korisnickoImeJeIspravno && lozinkaJeIspravna) {
      this.store.dispatch(new akcijeKorisnika.PrijaviKorisnika(this.korisnici[korisnickoIme])); //e sad, moram da izvucem korisnika
      this.router.navigate(["/naruciProizvod"]);
    }
  }

  proveriKorisnickoIme(korisnickoIme: string): boolean {
    let sviKorisnici: Object;
    this.store.select(korisnickiReducer.selectEntities).subscribe(korisnici => {
      sviKorisnici = korisnici;
    });

    return (sviKorisnici.hasOwnProperty(korisnickoIme));//true je ako sam uboo korisnicko ime
  }

  proveriLozinku(korisnickoIme: string, lozinka: string): boolean {
    let sviKorisnici: any;
    this.store.select(korisnickiReducer.selectEntities).subscribe(korisnici => sviKorisnici = korisnici);

    if (sviKorisnici.hasOwnProperty(korisnickoIme)) {
      let korisnik = sviKorisnici[korisnickoIme];//internet kaze da ovako treba
      return (korisnik.lozinka === lozinka);
    }
    else {
      alert(`Korisnik "${korisnickoIme}" ne postoji ovde`);
      return false;
    }
  }
}
