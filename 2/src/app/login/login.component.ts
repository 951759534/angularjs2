import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {PubService}from '../pub/pub.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PubService]
})
export class LoginComponent implements OnInit {
  constructor(private pub:PubService){
  }
      @Output()  update = new EventEmitter();

  sub(elem){
    this.update.emit(elem);
  }

  users = this.pub.users;
  ngOnInit() {
  }
}
