import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Output() cekiraniSastojak: EventEmitter<Event> = new EventEmitter();

  constructor(private store: Store<GlobalnoStanjeAplikacije>) { }

  ngOnInit() {
  }

  //sad, mozda mi i ne treba ovo ovde...
  selektujSastojak(event: Event) {
    this.cekiraniSastojak.emit(event);//i ovo kao sad radi, samo da ga povezem u roditeljskoj komponenti
  }

  emitujCekiraniSastojak(sastojak: Sastojak) {
    console.log("nesto");
  }
}
