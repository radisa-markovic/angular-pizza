import { Component, OnInit } from '@angular/core';
import { Narudzbina } from 'src/app/modeli-podataka/Narudzbina.model';

@Component({
  selector: 'app-narudzbina',
  templateUrl: './narudzbina.component.html',
  styleUrls: ['./narudzbina.component.css']
})
export class NarudzbinaComponent implements OnInit {
  narudzbine: Narudzbina[];

  constructor() { }

  ngOnInit() {
  }

}
