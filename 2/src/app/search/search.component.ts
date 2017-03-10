import { Component, OnInit} from '@angular/core';
import { PubService} from '../pub/pub.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import { Subject } from "rxjs/Subject";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[PubService]
})
export class SearchComponent implements OnInit {
  searchs:Observable<string>;
  searchContent = new Subject<string>();
  constructor(private pub:PubService) { }
    search:string;
  get(){
      this.searchContent.next(this.search);
  }

  ngOnInit() {
    this.searchs = this.searchContent.debounceTime(300).
      distinctUntilChanged().
      switchMap((search:string)=>this.pub.search(search));
    //用户敲击0.3秒后且searchContent中的内容发生改变才发送http请求
    //减少http请求
  }
}
