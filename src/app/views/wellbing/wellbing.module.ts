import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellbingComponent } from './wellbing.component';
import { BaseComponent } from './Base/Base.component';
import { LookComponent } from './Look/Look.component';
import { DetailLookComponent } from './DetailLook/DetailLook.component';
import { WellbingRouting } from './wellbing.routing';
@NgModule({
  imports: [
    CommonModule,WellbingRouting
  ],
  declarations: [WellbingComponent,
    BaseComponent,
    LookComponent,
    DetailLookComponent
]
})
export class WellbingModule { }