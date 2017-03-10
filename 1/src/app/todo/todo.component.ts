import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { Todo } from '../domain/entities';
import { TodoService } from "./todo.service";
@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[];
  constructor(private service:TodoService,
              private route:ActivatedRoute,
              private router:Router) {
    this.filterTodos('All');
  }
  desc='';
  ngOnInit() {
    this.route.params.forEach((params:Params)=>{
      let filter = params['filter'];
      this.filterTodos(filter);
    })
  }
  addTodo(data:string){
    this.desc=data;
    this.service.addTodo(this.desc)
    .then(todo =>{
        this.todos = [...this.todos,todo];
        this.desc="";
      });
  }
  updateTodo(todo:Todo){
    const i = this.todos.indexOf(todo);
    this.service.updateTodo(todo).then(todo=>{
      this.todos = [...this.todos.slice(0,i),todo,...this.todos.slice(i+1)];
    })
  }
  removeTodo(todo:Todo): Promise<void>{
    const i=this.todos.indexOf(todo);
    this.service.deleteTodoById(todo.id).then(
      ()=>{this.todos = [...this.todos.slice(0,i),...this.todos.slice(i+1)];}
    );
    return null;
  }
  filterTodos(filter:string):void{
    this.service.filterTodos(filter).then(todos=>this.todos = [...todos]);
  }
/*  onTextChanges(value){
    this.desc=value;
  }*/
  clearAll(){
    const todos = this.todos.filter(todo=> todo.completed===true);
    const Activetodos = this.todos.filter(todos=>todos.completed === false);
   /* todos.forEach(todo => this.removeTodo(todo)); */ /*     同步方法 不推荐使用*/
/*    Promise.all(todos.map(todo=>this.removeTodo(todo)));*/
    Promise.all(todos.map(todo=>this.removeTodo(todo)))
      .then(()=>(this.todos = Activetodos));
  }
  updataAll(){
    const todos = this.todos.filter(todo => todo.completed===false);
    Promise.all(todos.map(todo=>this.updateTodo(todo)));
  }
}
