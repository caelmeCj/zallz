import { Component, OnInit,Input } from '@angular/core';
import {ZfmService} from '../../../services/zfm.service';
import {BaseService} from '../../../services/base.service';

import {BaseComponent} from '../base/base.component';
@Component({
  selector: 'app-Fill',
  templateUrl: './Fill.component.html',
  styleUrls: ['./Fill.component.scss']
})
export class FillComponent extends BaseComponent implements OnInit {
  @Input() actionUser:String;
  
  constructor( zfm:ZfmService,base:BaseService) { super(zfm,base);}

  ngOnInit() {
    this.changeScreen("zfm/fill");
  }

}
