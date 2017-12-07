import { Routes, RouterModule } from '@angular/router';
import {ZfmComponent} from './zfm.component';
const routes: Routes = [
  {
    path: '',
    component: ZfmComponent,
    data: {
      title: 'zfm'
    }
  }
];

export const ZfmRoutingRoutes = RouterModule.forChild(routes);
