import { Component, OnInit, Input } from '@angular/core';
import { Sastojak } from '../../models/Sastojak.model';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { A_DodajSastojakNaPicu, A_UkloniSastojakSaPice } from 'src/app/store/akcije/sastojci.akcije';

@Component({
  selector: 'app-sastojak',
  templateUrl: './sastojak.component.html',
  styleUrls: ['./sastojak.component.css']
})
export class SastojakComponent implements OnInit {
  @Input() sastojak: Sastojak;
  
  constructor(private store: Store<GlobalnoStanjeAplikacije>) { }

  ngOnInit() {
    
  }

  selektujSastojak(event: Event) 
  {
    const dugme = <HTMLInputElement>event.target;
    
    if(dugme.checked)
      this.store.dispatch(A_DodajSastojakNaPicu({sastojak: this.sastojak}));
    else
      this.store.dispatch(A_UkloniSastojakSaPice({sastojak: this.sastojak}));
  }

}
