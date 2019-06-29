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
  @Input() sastojak: Sastojak;
  @Output() cekiraniSastojak: EventEmitter<Event> = new EventEmitter();

  constructor(private store: Store<GlobalnoStanjeAplikacije>) { }

  ngOnInit() {
  }

  selektujSastojak(event: Event) {
    this.cekiraniSastojak.emit(event);
  }

  emitujCekiraniSastojak(sastojak: Sastojak) {
    console.log("nesto");
  }
}
