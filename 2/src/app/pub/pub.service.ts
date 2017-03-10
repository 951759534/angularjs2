import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PubService {

  constructor(private jsonp:Jsonp) { }
  users=[{
    id:"1",
    name:'123',
    pass:'123'
  },{
    id:"2",
    name:'12345',
    pass:'12345'
  }];
  update(elem){
      this.users[elem.index] = elem.user;
  }
  search(term:string){
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('search',term);
    params.set('action','opensearch');
    params.set('format','json');
    params.set('callback','JSONP_CALLBACK');
    /*
    * params 等价于
    *
    *
    * let queryString =
     `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;

     return this.jsonp
     .get(wikiUrl + queryString)
     .map(response => <string[]> response.json()[1]);
    *
    *
    * */
    return this.jsonp.get(wikiUrl,{search:params}).map(response=><string>response.json()[1]);
  }
}
