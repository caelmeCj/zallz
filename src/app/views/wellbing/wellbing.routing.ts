import { Routes, RouterModule } from '@angular/router';
import {WellbingComponent} from './wellbing.component';
const routes: Routes = [
  {
    path: '',
    component: WellbingComponent,
    data: {
      title: 'wellbing'
    }
  }
];

export const WellbingRouting = RouterModule.forChild(routes);
