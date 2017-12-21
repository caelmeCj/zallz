import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import {ZfmService} from '../../../services/zfm.service';
import {BaseService} from '../../../services/base.service';
import {BaseComponent} from '../base/base.component';
import {Fam} from '../../../models/fam';
import * as moment from 'moment';
@Component({
  selector: 'app-Look',
  templateUrl: './Look.component.html',
  styleUrls: ['./Look.component.scss']
})
export class LookComponent extends BaseComponent implements OnInit {

  
  @Output() onCollapsed = new EventEmitter<boolean>();
  try:string='try';
  collapsed=false;
  p: number = 1; 
  private filter:any={
    event:'',
    contain:'',
    date:moment('01-01-0001','DD/MM/YYYY').toDate(),
    place:'',
    timeLong:'',
    num:0,
  };

  private hideLook:number[]=[];
  // private famToShow:Map<Fam,boolean>;


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
    this.hideLook=[];
  let ToShow:Fam[]=[];

    for(var fam of this.zfm.$fams){
      var ok=true;
      if(this.filter.num!=0 && fam.$num!=this.filter.num){
        ok=false;
      }
      else if(this.filter.event!='' && fam.$event.indexOf(this.filter.event)==-1){
        ok=false;
      }
      else if(this.filter.contain!='' && fam.$summary.indexOf(this.filter.contain)==-1 && fam.$fam.indexOf(this.filter.contain)==-1){
        ok=false;
      }
      else if(this.filter.place!='' && fam.$place.$place.indexOf(this.filter.place)==-1){
        ok=false;
      }
      else if(this.filter.timeLong!='' && fam.$timeLong.indexOf(this.filter.timeLong)==-1){
        ok=false;
      }
      else if(moment(this.filter.date).year() > 10 && !moment(this.filter.date).isSame(fam.$date)){
        ok=false;
      }
      // console.log(this.filter.Date)
      if(!ok){
        this.hideLook.push(fam.$num);
      }else{
        ToShow.push(fam);
      }
    }
    return ToShow;
    // return this.zfm.$fams; 
  }

  Change(){
    // this.onChanged.emit(true);
  }

  selectFam(fam:Fam){
    this.zfm.$selectedFam=fam;

    this.changeScreen('zfm/look/detail');
  }

  onChanged(){

  }

  public set $dateFilter(value: any ) {
		// this.dateObj = value;
		this.filter.date=moment(""+value.date.day+"/"+value.date.month+"/"+value.date.year,"DD/MM/YYYY").toDate();
	}

}
