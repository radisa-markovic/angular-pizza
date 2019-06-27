import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Korisnik } from '../../modeli-podataka/Korisnik.model';
import * as korisnickiReducer from '../../store/reduceri/korisnici.reducer';

@Component({
  selector: 'app-prijavi-se',
  templateUrl: './prijavi-se.component.html',
  styleUrls: ['./prijavi-se.component.css']
})
export class PrijaviSeComponent implements OnInit {
  forma: FormGroup;
  korisnickoIme: string;
  lozinka: string;

  //dal mi ovo uopste i treba?
  korisnici: Observable<Korisnik[]>;//sad, koja je fora; mozda ne trebam ovako, al za sada cu ovako da guram sve ovde

  constructor(private formBuilder: FormBuilder,
    private store: Store<GlobalnoStanjeAplikacije>,
    private router: Router) { }

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
      //saljem akciju "PRIJAVI_KORISNIKA", to hvata korisnicki reducer, pa menjam u...
      //...header-u neke stvari, a idem i redirect na ponudu
      console.log("Zameniti ovo ispod da pokazuje na bolje stvari");
      this.router.navigate(["/pica"]);
    }
  }

  proveriKorisnickoIme(korisnickoIme: string): boolean {
    console.log("Slobo");
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
