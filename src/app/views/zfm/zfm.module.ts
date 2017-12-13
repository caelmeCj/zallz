import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZfmComponent } from './zfm.component';
import { ZfmRoutingRoutes } from './zfmRouting.routing';
import { LookComponent } from './Look/Look.component';
import { FillComponent } from './Fill/Fill.component';
import { ZfmService } from '../../services/zfm.service';

import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [
    CommonModule,
    ZfmRoutingRoutes
  ],
  providers:[ZfmService],
  declarations: [ZfmComponent,
    LookComponent,
    FillComponent
,
    BaseComponent
]
})
export class ZfmModule { }