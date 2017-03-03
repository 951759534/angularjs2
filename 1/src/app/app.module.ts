import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { publicService} from './service/public.service';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {TodoModule} from './todo/todo.module'
import { Routers } from './app.routers';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routers,
    TodoModule
  ],
  providers: [publicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
