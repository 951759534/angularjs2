import { Injectable } from '@angular/core';
import {Http,Headers} from"@angular/http";
import 'rxjs/add/operator/toPromise';
import { Todo } from '../domain/entities';
import { UUID } from 'angular2-uuid'     //引入UUID 插件
@Injectable()
export class TodoService {
  private  api_url = 'http://localhost:3000/todos';
  private headers = new Headers({'Content-Type':'application/json'});
  constructor(private http:Http) { }
  addTodo(desc:string):Promise<Todo>{
    const userId:number = +localStorage.getItem('userId');  //将string简易转化为number型
    let todo = {
      id:UUID.UUID(),
      desc:desc,
      completed:false,
      userId:userId
    };

    return this.http
                .post(this.api_url,JSON.stringify(todo),{headers:this.headers})
                .toPromise()
                .then(res =>res.json()as Todo)
                .catch(this.handleError);
  }
  updateTodo(todo:Todo):Promise<Todo>{
    const url = `${this.api_url}/${todo.id}`;
    let updatedTodo = Object.assign({},todo,{completed:!todo.completed});
    return this.http.put(url,JSON.stringify(updatedTodo),
      {headers:this.headers}).toPromise().then(()=>updatedTodo)
    .catch(this.handleError);
  }
  deleteTodoById(id:string):Promise<void>{
    const url = `${this.api_url}/${id}`;
    return this.http.delete(url,{
        headers:this.headers
    }).toPromise().then(()=>null).catch(this.handleError);
  }
  filterTodos(filter:string):Promise<Todo[]>{
    const userId:number = +localStorage.getItem('userId');
    const url = `${this.api_url}/?userId=${userId}`;
    switch(filter){
      case'Active':return this.http.get(`${url}&completed=false`).toPromise().then(res=>res.json()as Todo[]).catch(this.handleError);
      case 'Completed': return this.http.get(`${url}&completed=true`).toPromise().then(res=>res.json()as Todo[])
        .catch(this.handleError);
      default:
        return this.getTodos();
    }
  }
  getTodos():Promise<Todo[]>{
    const userId:number = +localStorage.getItem('userId');
    return this.http.get(`${this.api_url}/?userId = ${userId}`)
      .toPromise().then(res=>res.json() as
        Todo[]).catch(this.handleError);
  }
  private handleError(error: any):Promise<any>{
    console.error("error",error);
    return Promise.reject(error.message||error);
  }
}
