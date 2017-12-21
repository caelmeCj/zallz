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
import {NgxPaginationModule} from 'ngx-pagination';
import {FroalaEditorModule,FroalaViewModule} from 'angular-froala-wysiwyg';
import { DetailLookComponent } from './DetailLook/DetailLook.component';
import { MyDatePickerModule} from 'mydatepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
// import {TimePickerComponent} from "angular2-timepicker/timepicker-component";

@NgModule({
  imports: [
    CommonModule,
    ZfmRoutingRoutes,
    BsDropdownModule,
    FormsModule,
    NgxPaginationModule,
    MyDatePickerModule,
    TimepickerModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers:[ZfmService],
  declarations: [ZfmComponent,
    LookComponent,
    FillComponent
,
    BaseComponent
,
    DetailLookComponent
]
})
export class ZfmModule { }