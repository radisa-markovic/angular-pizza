import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';

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
    this.router.navigate(["/naruciProizvod/pica"]);
  }
}
