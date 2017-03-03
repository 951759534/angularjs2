import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from './form/form.component';
import { TodoComponent } from './todo/todo.component';
const router:Routes = [
  {
    path: '',
    redirectTo: 'todo/All',
    pathMatch: 'full'
  },{
    path:'todo',
    redirectTo:'todo/All'
  },{path:'form',
    component:FormComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(router)],
  exports: [ RouterModule]
})
export class Routers{}
