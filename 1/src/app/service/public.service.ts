import { Injectable } from '@angular/core';

@Injectable()
export class publicService {
      message= 11;
  constructor() { }
  checkLogin(name:string,password:string):boolean{
    if(name == "1"){
      return true;
    }
    return false;
  }
}
