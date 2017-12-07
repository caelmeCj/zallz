import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZfmComponent } from './zfm.component';
import { ZfmRoutingRoutes } from './zfmRouting.routing';
import { LookComponent } from './Look/Look.component';
import { FillComponent } from './Fill/Fill.component';

@NgModule({
  imports: [
    CommonModule,
    ZfmRoutingRoutes
  ],
  declarations: [ZfmComponent,
    LookComponent,
    FillComponent
]
})
export class ZfmModule { }