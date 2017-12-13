import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZfmComponent } from './zfm.component';
import { ZfmRoutingRoutes } from './zfmRouting.routing';
import { LookComponent } from './Look/Look.component';
import { FillComponent } from './Fill/Fill.component';
import { ZfmService } from '../../services/zfm.service';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  imports: [
    CommonModule,
    ZfmRoutingRoutes,
    BsDropdownModule,
    FormsModule  
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