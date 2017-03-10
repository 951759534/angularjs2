import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
const router:Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },{
    path:'todo',
    redirectTo:'todo/All'
  },{path:'login',
    component:LoginComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(router)],
  exports: [ RouterModule]
})
export class Routers{}
