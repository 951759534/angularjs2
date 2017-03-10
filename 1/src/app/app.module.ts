import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { publicService} from './service/public.service';
import {AuthService} from './service/auth.service';
import { AuthGuardService }from './service/auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {TodoModule} from './todo/todo.module'
import { Routers } from './app.routers';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routers,
    TodoModule
  ],
  providers: [publicService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
