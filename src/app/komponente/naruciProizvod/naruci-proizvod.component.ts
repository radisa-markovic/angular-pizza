import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';
//ovo moram da ispravim, al prvo da vidim dal uopste radi...
import * as akcijeProizvod from '../../store/akcije/pica.akcije';

@Component({
  selector: 'app-naruci-proizvod',
  templateUrl: './naruci-proizvod.component.html',
  styleUrls: ['./naruci-proizvod.component.css']
})
export class NaruciProizvodComponent implements OnInit {

  constructor(private router: Router, private store: Store<GlobalnoStanjeAplikacije>) { }

  ngOnInit() {
  }

  naruciPicu(): void {
    //duck typing do maksimuma, a i pomerio sam ga u komponentu za picu
    //this.store.dispatch({ type: 'POTVRDI PROIZVOD' }); //najruznija akcija koju sam napisao do sada
    this.router.navigate(["/naruciProizvod/pica"]);
  }
}
