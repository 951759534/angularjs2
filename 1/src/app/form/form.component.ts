import { Component, OnInit } from '@angular/core';
import { publicService} from '../service/public.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user = "请输入用户名";
  pass = "请输入密码";
  service:publicService;
  constructor() {
    this.service = new publicService();
  }
  ngOnInit(){
  }
  check(){

  }
  submit(form){
    console.log(this.service.checkLogin(this.user,this.pass));
    console.log(form);
    console.log(this.service.message);
  }
}
