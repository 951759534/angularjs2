import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AuthGuardService } from '../service/auth-guard.service';

export const routes: Routes = [
  {
    path: 'todo/:filter',
    canActivate:[AuthGuardService],
    component: TodoComponent
  }
];
export const routing = RouterModule.forChild(routes);
