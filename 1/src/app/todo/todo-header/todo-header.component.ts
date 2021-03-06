import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue: string = '';
  @Input() placeholder: string = 'What needs to be done?';
  @Output() onEnterUp = new EventEmitter<string>();
  constructor(private elementRef: ElementRef) {
   /* const event$ = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue);
    event$.subscribe(input => this.textChanges.emit(input));*/
  }
  ngOnInit() {

  }
  enterUp(){
    if(this.inputValue.indexOf("@")==-1){
      this.onEnterUp.emit(this.inputValue);
      this.inputValue = '';
    }else{
      alert("错误");
    }
  }
}
