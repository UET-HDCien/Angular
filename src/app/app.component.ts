import { Component } from '@angular/core';
import { Profile } from './profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  names = ['Kien1', 'Kien2', 'Kien3', 'Kien4'];
  Profiles = [
  new Profile("kien1", "123","456"),
  new Profile("kien2", "1234","4567"),
  new Profile("kien3", "1235","4568"),
  
];

}
