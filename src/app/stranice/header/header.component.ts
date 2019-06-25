import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  odjaviKorisnika(event: Event): void {
    event.preventDefault();//da "ne odluta" sa aplikacije
    //neke zajebancije sa ngrx store-om, al to od sutra, sad samo hocu redirect
    this.router.navigate(["/"]); //nek ide na pocetnu npr
  }

}
