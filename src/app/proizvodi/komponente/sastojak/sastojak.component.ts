import { Component, OnInit, Input } from '@angular/core';
import { Sastojak } from '../../modeli/Sastojak.model';

@Component({
  selector: 'app-sastojak',
  templateUrl: './sastojak.component.html',
  styleUrls: ['./sastojak.component.css']
})
export class SastojakComponent implements OnInit {
  @Input() sastojak: Sastojak;

  constructor() { }

  ngOnInit() {
  }

  selektujSastojak(sastojak: Sastojak) {
    alert(`Gna yams kwjs, izvaibaepnfhous ymxoge skoufhn`);
  }
}
