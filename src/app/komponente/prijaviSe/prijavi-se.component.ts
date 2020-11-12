import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { A_PrijaviKorisnika } from 'src/app/store/akcije/korisnici.akcije';
import { UI } from 'src/app/store/reduceri/ui.reducer';

@Component({
  selector: 'app-prijavi-se',
  templateUrl: './prijavi-se.component.html',
  styleUrls: ['./prijavi-se.component.css']
})
export class PrijaviSeComponent implements OnInit {
  forma: FormGroup;
  uiStanje$: Observable<UI>;
  minimalnaDuzinaKorisnickogImena: number = 4;
  minimalnaDuzinaLozinke: number = 7;
  korisnickoImeJePogresno: boolean;
  lozinkaJePogresna: boolean;

  constructor(private formBuilder: FormBuilder,
              private store: Store<GlobalnoStanjeAplikacije>)
  { 
    this.uiStanje$ = this.store.pipe(select(stanje => stanje.uiStanje));
  }

  ngOnInit() {
    this.uiStanje$.subscribe((stanje) => {
      this.korisnickoImeJePogresno = stanje.korisnickoImeJePogresno,
      this.lozinkaJePogresna = stanje.lozinkaJePogresna
    });

    this.forma = this.formBuilder.group({
      'korisnickoIme': [null, Validators.compose([Validators.required, 
                                                  Validators.minLength(this.minimalnaDuzinaKorisnickogImena)])],
      'lozinka': [null, Validators.compose([Validators.required, 
                                            Validators.minLength(this.minimalnaDuzinaLozinke)])]
    });

  }

  kontrolaNijeValidna(nazivKontrole: string): boolean
  {
    return !this.forma.controls[nazivKontrole].valid && 
            this.forma.controls[nazivKontrole].touched;
  }

  prijaviKorisnika(): void {
    const { korisnickoIme, lozinka } = this.forma.value;
    this.store.dispatch(A_PrijaviKorisnika({korisnickoIme, lozinka}));
  }

}