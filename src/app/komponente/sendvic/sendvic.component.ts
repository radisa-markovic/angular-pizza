import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sendvic',
  templateUrl: './sendvic.component.html',
  styleUrls: ['./sendvic.component.css']
})
export class SendvicComponent implements OnInit {
  ukupnaCena: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
