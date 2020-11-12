import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { GlobalnoStanjeAplikacije } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restoran-kafilerija';

  constructor(private store: Store<GlobalnoStanjeAplikacije>) { };
}
