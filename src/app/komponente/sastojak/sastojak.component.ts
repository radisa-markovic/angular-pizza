import { Component, OnInit, Input } from '@angular/core';
import { Sastojak } from '../../modeli-podataka/Sastojak.model';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as sastojakAkcije from '../../store/akcije/sastojci.akcije';//odvratna putanja

@Component({
  selector: 'app-sastojak',
  templateUrl: './sastojak.component.html',
  styleUrls: ['./sastojak.component.css']
})
export class SastojakComponent implements OnInit {
  @Input() sastojak: Sastojak;//trebam da povezem sa ngrx efektima, a treba mi i putanja do slike

  constructor(private store: Store<GlobalnoStanjeAplikacije>) { }

  ngOnInit() {
  }

  selektujSastojak(sastojak: Sastojak) {
    console.log(sastojak);
    this.store.dispatch(new sastojakAkcije.DodajSastojak(sastojak));
  }
}
