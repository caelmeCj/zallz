import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'home'
    }
  }
];

export const HomeRoutingRoutes = RouterModule.forChild(routes);
