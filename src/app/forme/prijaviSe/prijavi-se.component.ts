import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prijavi-se',
  templateUrl: './prijavi-se.component.html',
  styleUrls: ['./prijavi-se.component.css']
})
export class PrijaviSeComponent implements OnInit {
  forma: FormGroup;
  korisnickoIme: string;
  lozinka: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forma = this.formBuilder.group({
      'korisnickoIme': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'lozinka': [null, Validators.compose([Validators.required, Validators.minLength(7)])]
    });
  }

  //onaj amer sa DesignCOurse je u formi stavio dugme kao submit, mozda i ja trebam tako da izvedem
  //videcu sutra, mxausvtas fhous mqntei qpwvtouktnbavs

}
