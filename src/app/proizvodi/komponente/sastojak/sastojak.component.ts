import { Component, OnInit, Input } from '@angular/core';
import { Sastojak } from '../../modeli/Sastojak.model';

@Component({
  selector: 'app-sastojak',
  templateUrl: './sastojak.component.html',
  styleUrls: ['./sastojak.component.css']
})
export class SastojakComponent implements OnInit {
  @Input() sastojak: Sastojak;//trebam da povezem sa ngrx efektima, a treba mi i putanja do slike

  constructor() { }

  ngOnInit() {
  }

  selektujSastojak(sastojak: Sastojak) {
    alert(`Uciniti da ovo baca akciju neku koja se posle sabira sa cenom, tipa pica.reducer, ne znam...`);
    console.log(sastojak);
  }
}
