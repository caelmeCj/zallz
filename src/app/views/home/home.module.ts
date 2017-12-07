import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingRoutes } from './homeRouting.routing';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingRoutes,
    BsDropdownModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }