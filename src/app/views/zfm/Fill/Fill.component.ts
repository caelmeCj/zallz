import { Component, OnInit,Input } from '@angular/core';
import {ZfmService} from '../../../services/zfm.service';

@Component({
  selector: 'app-Fill',
  templateUrl: './Fill.component.html',
  styleUrls: ['./Fill.component.scss']
})
export class FillComponent implements OnInit {
  @Input() actionUser:String;
  @Input() zfmService:ZfmService;
  constructor() { }

  ngOnInit() {
  }

}
