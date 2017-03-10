import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() isChecked:boolean;
  @Input() todoDesc:string = '';
  @Output() onUpdateTriggered = new EventEmitter<boolean>(); //尖括号是发送的类型
  @Output() onRemoveTriggered = new EventEmitter<boolean>();

  update() {
    this.onUpdateTriggered.emit(this.isChecked);
  }
  remove() {
    this.onRemoveTriggered.emit(true);
  }
}
