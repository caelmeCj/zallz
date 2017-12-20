import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {ZfmService} from '../../../services/zfm.service';
import {BaseService} from '../../../services/base.service';
import {IMyDpOptions} from 'mydatepicker';
import * as moment from 'moment';
@Component({
  selector: 'app-DetailLook',
  templateUrl: './DetailLook.component.html',
  styleUrls: ['./DetailLook.component.scss']
})
export class DetailLookComponent extends BaseComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd/mm/yyyy',
    };
  
  // public model: any = { date: { year: 2018, month: 10, day: 9 } };
  constructor(zfm:ZfmService,base:BaseService) { super(zfm,base);}

  ngOnInit() {
  }

}
