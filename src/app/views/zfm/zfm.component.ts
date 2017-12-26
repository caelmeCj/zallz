import { Component, OnInit } from '@angular/core';
import {ZfmService} from '../../services/zfm.service';
import {BaseService} from '../../services/base.service';
import {BaseComponent} from './base/base.component';

@Component({
  selector: 'app-zfm',
  templateUrl: './zfm.component.html',
  // template:'<app-Fill [actionUser]="this.actionUser" ></app-Fill>',
  styleUrls: ['./zfm.component.scss']
})
export class ZfmComponent  extends BaseComponent implements OnInit{

  private actionUser:string='nothing';
  private screen:string='look';

  constructor(zfm:ZfmService,base:BaseService) {
    super(zfm,base);
    // this.changeScreen("look");
    // this.$screen="look";
  }

  ngOnInit() {
       this.changeScreen("zfm/look");
       
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    
  }

  // ngAfterViewInit() {
    
  // }

onCollapsedLook(collapsed:boolean){
  console.log(collapsed)
}


	public get $screen(): string {
    if(this.screen==null) this.screen='look';
		return this.screen;
	}

	public set $screen(value: string) {
		this.screen = value;
	}



}
