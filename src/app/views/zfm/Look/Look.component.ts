import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import {ZfmService} from '../../../services/zfm.service';
import {BaseService} from '../../../services/base.service';
import {BaseComponent} from '../base/base.component';
@Component({
  selector: 'app-Look',
  templateUrl: './Look.component.html',
  styleUrls: ['./Look.component.scss']
})
export class LookComponent extends BaseComponent implements OnInit {

  
  @Output() onCollapsed = new EventEmitter<boolean>();

  collapsed=false;

  collapse(){
    this.onCollapsed.emit(!this.collapsed);
    this.collapsed=!this.collapsed;
    console.log("collapse");
  }

  constructor(zfm:ZfmService,base:BaseService) { super(zfm,base);}

  ngOnInit() {
    this.changeScreen("zfm/look");
  }


  getToShow(){
    return this.zfm.$fams; 
  }

  Change(){
    // this.onChanged.emit(true);
  }

  onChanged(){

  }

}
