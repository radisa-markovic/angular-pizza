import { Component, OnInit } from '@angular/core';
import { Sastojak } from '../../modeli/Sastojak.model';
import { SastojciService } from '../../../servisi/sastojci.service';

@Component({
  selector: 'app-pica',
  templateUrl: './pica.component.html',
  styleUrls: ['./pica.component.css']
})
export class PicaComponent implements OnInit {
  osnovnaCena: number;
  sastojci: Sastojak[];

  constructor(private sastojciService: SastojciService) { }

  ngOnInit() {
    this.sastojciService.vratiSastojke().subscribe(sastojciIzBaze => this.sastojci = sastojciIzBaze);
  }

}
