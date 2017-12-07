import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'App'
    },
    children: [
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
      },
      {
        path: 'zfm',
        loadChildren: './views/zfm/zfm.module#ZfmModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
