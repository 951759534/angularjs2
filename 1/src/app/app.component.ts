import { Component } from '@angular/core';
import { publicService} from './service/public.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  service:publicService;
  constructor(){
    this.service = new publicService();
  }
  title = 'app works!';
}
