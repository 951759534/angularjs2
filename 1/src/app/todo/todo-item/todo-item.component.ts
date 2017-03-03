import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() isChecked:boolean = false;
  @Input() todoDesc:string = '';
  @Output() onUpdateTriggered = new EventEmitter<boolean>();
  @Output() onRemoveTriggered = new EventEmitter<boolean>();

  toggle() {
    this.onUpdateTriggered.emit(true);
  }
  remove() {
    this.onRemoveTriggered.emit(true);
  }
}
