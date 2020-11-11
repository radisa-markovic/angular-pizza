import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalnoStanjeAplikacije } from 'src/app/app.state';

@Component({
  selector: 'app-naruci-proizvod',
  templateUrl: './naruci-proizvod.component.html',
  styleUrls: ['./naruci-proizvod.component.css']
})
export class NaruciProizvodComponent implements OnInit {
  protected stavkaZaPonudu: string;

  constructor(private router: Router,
              private route: ActivatedRoute, 
              private store: Store<GlobalnoStanjeAplikacije>)
  { }

  ngOnInit() {
    
  }

}
