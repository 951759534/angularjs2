import { Component,Input } from '@angular/core';

import {PubService} from './pub/pub.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private pub:PubService){

  }
  users = this.pub.users;
  onUpdate(event){
    this.pub.update(event);
    console.log(event);
  }
}
