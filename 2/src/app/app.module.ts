import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {PubService} from './pub/pub.service';
import { SearchComponent } from './search/search.component';
import {Routers} from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
    ,Routers
  ],
  providers: [PubService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
