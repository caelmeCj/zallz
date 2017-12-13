import { Component, OnInit } from '@angular/core';
import {BaseService} from '../../../services/base.service';
import {ZfmService} from '../../../services/zfm.service';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(protected zfm:ZfmService,protected base:BaseService) { }

  ngOnInit() {
  }

  protected changeCollapse(){
    this.base.$isCollapsed=!this.base.$isCollapsed;
  }

  protected changeScreen(screen:string){
    this.base.$screen=screen;
  }

  protected changeActionUser(action:string){
    this.base.$actionUser=action;
  }

}
