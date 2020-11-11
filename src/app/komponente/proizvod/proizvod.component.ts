import { Component, OnInit, Input } from '@angular/core';
import { Narudzbina } from '../../models/Narudzbina.model';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})
export class ProizvodComponent implements OnInit {
  @Input() narudzbina: Narudzbina; //jedna narudzbina

  constructor() { }

  ngOnInit() {
  }

}
