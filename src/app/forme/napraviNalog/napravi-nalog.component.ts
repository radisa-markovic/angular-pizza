import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forma = this.formBuilder.group({
      'ime': [null, Validators.required],
      'prezime': [null, Validators.required],
      'korisnickoIme': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'lozinka': [null, Validators.compose([Validators.required, Validators.minLength(7)])]
    });
  }

  dodajKorisnika(korisnik: any) {
    alert(`Naselje, u moje naselje`);
    this.ime = korisnik.ime;///itd
  }
}
