import { Component, OnInit } from '@angular/core';
import {ZfmService} from '../../services/zfm.service';
@Component({
  selector: 'app-zfm',
  templateUrl: './zfm.component.html',
  // template:'<app-Fill [actionUser]="this.actionUser" ></app-Fill>',
  styleUrls: ['./zfm.component.scss']
})
export class ZfmComponent implements OnInit {

  private actionUser:string='nothing';
  private zfmServive:ZfmService;
  constructor() {
    this.zfmServive=new ZfmService();
  }

  ngOnInit() {
    
  }

onCollapsedLook(collapsed:boolean){
  console.log(collapsed)
}


}
