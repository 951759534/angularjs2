import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../domain/entities';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  _todos: Todo[] = [];
  @Input()
  set todos(todos:Todo[]){
    this._todos = [...todos];
  }
  get todos() {
    return this._todos;
  }
  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onUpdateTodo = new EventEmitter<Todo>();

  onRemoveTriggered(todo: Todo){
    this.onRemoveTodo.emit(todo);
  }
  onUpdateTriggered(todo: Todo){
    this.onUpdateTodo.emit(todo);
  }
}
