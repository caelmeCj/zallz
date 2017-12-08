import { Component, OnInit } from '@angular/core';
import {ZfmService} from '../../services/zfm.service';
@Component({
  selector: 'app-zfm',
  templateUrl: './zfm.component.html',
  styleUrls: ['./zfm.component.scss']
})
export class ZfmComponent implements OnInit {

  private actionUser:string='nothing';

  constructor(private zfmService:ZfmService) { }

  ngOnInit() {
    console.log("sss---"+this.zfmService.myData())
  } 

  

}
