import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import {ZfmService} from '../../../services/zfm.service';
@Component({
  selector: 'app-Look',
  templateUrl: './Look.component.html',
  styleUrls: ['./Look.component.scss']
})
export class LookComponent implements OnInit {

  @Input() zfmService:ZfmService;
  @Output() onCollapsed = new EventEmitter<boolean>();

  collapsed=false;

  collapse(){
    this.onCollapsed.emit(!this.collapsed);
    this.collapsed=!this.collapsed;
    console.log("collapse");
  }

  constructor() { }

  ngOnInit() {
  }

  Change(){
    // this.onChanged.emit(true);
  }

  onChanged(){

  }

}
