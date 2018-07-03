import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	profile1 : Profile = {
        name : "kien1",
   		email : "tytotum0003@gmail.com",
        phone : "01689730941"
    }
    

  constructor() { }

  ngOnInit() {
  }

}
