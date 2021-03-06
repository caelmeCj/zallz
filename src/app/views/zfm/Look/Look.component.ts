import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges, SimpleChanges
} from '@angular/core';
import { of
} from "rxjs/observable/of";
import {
  delay,
  share
} from 'rxjs/operators';
import {
  Observable,
  Subscriber
} from 'rxjs';
import {
  ZfmService
} from '../../../services/zfm.service';
import {
  BaseService
} from '../../../services/base.service';
import {
  BaseComponent
} from '../base/base.component';
import {
  Fam
} from '../../../models/fam';
import * as moment from 'moment';
import {
  BsDatepickerConfig
} from 'ngx-bootstrap/datepicker';
// import { listLocales } from 'ngx-bootstrap/bs-moment';
import {
  defineLocale
} from 'ngx-bootstrap/bs-moment';
import {
  fr
} from 'ngx-bootstrap/locale';
import {Subject} from 'rxjs/Rx';

import {PlacePipePipe} from '../../../pipes/PlacePipe.pipe';

// import {FilterByPipe} from 'ngx-pipes';
@Component({
  selector: 'app-Look',
  templateUrl: './Look.component.html',
  styleUrls: ['./Look.component.scss']
})
export class LookComponent extends BaseComponent implements OnInit {


  @Output() onCollapsed = new EventEmitter < boolean > ();
  

  try: string = 'try';
  collapsed = false;
  p: number = 1;
  private local: string = "fr";
  @Input() private filter: any = {
    event: '',
    contain: '',
    date: moment('01/01/0001', 'DD/MM/YYYY').toDate(),
    date_month: false,
    date_year: false,
    date_range: [moment('01/01/0001', 'DD/MM/YYYY').toDate(), moment('01/01/0001', 'DD/MM/YYYY').toDate()],
    date_range_month: false,
    date_range_year: false,
    place: '',
    timeLong: moment('00:00', 'hh:mm').toDate(),
    time1: moment('00:00', 'hh:mm').toDate(),
    time2: moment('00:00', 'hh:mm').toDate(),
    num: 0,
  };
  toRender:Fam[];
  toShow: Observable < Fam[] > ;

  @Input() private events: string = '';
  private contain: string = '';
  private place: number = 0;
  private date: Date = moment('01/01/0001', 'DD/MM/YYYY').toDate();
  private date_range: Date[] = [moment('01/01/0001', 'DD/MM/YYYY').toDate(), moment('01/01/0001', 'DD/MM/YYYY').toDate()];
  private date_month: boolean = false;
  private date_year: boolean = false;
  private date_range_month: boolean = false;
  private date_range_year: boolean = false;
  private timeLong: Date = moment('00:00', 'hh:mm').toDate();
  private time1: Date = moment('00:00', 'hh:mm').toDate();
  private time2: Date = moment('00:00', 'hh:mm').toDate();
  refreshShow(){
    // console.log(this.zfm.$behavFams);
    this.zfm.$behavFams.subscribe(res=>{
      this.toShow=this.getAsyncData(res).pipe(share());
    });
  }
  



  @Output() filterEmit = new EventEmitter < number > ();

  public dpConfig: Partial < BsDatepickerConfig > = new BsDatepickerConfig();
  bsRangeConfig = Object.assign({}, {
    maxDate: new Date(),
    showWeekNumbers: false,
    rangeSeparator: ' || ',
    locale: 'fr',
    containerClass: 'theme-dark-blue',
    rangeInputFormat: 'DD/MM/YYYY'
  });

  collapse() {
    this.onCollapsed.emit(!this.collapsed);
    this.collapsed = !this.collapsed;
    console.log("collapse");
  }

  constructor(zfm: ZfmService, base: BaseService) {
    super(zfm, base);
    defineLocale('fr', fr);
    this.dpConfig.containerClass = 'theme-blue';
    this.dpConfig.locale = 'fr';
    this.dpConfig.dateInputFormat = "DD/MM/YYYY";
    this.dpConfig.maxDate = new Date();
    this.dpConfig.value = new Date();

  }
  ngOnInit() {
    this.changeScreen("zfm/look");
    this.refreshShow();
  }



  getAsyncData(fams:Fam[]) {
    // Fake Slow Async Data

    let ToShow: Fam[] = [];
    // console.log(moment(this.filter.date).format("YYYY-MM-DD"),moment(this.zfm.$fams[0].$date).format("YYYY-MM-DD"))
    for (var fam of fams) {
      var ok = true;

      

      if (this.filter.num != 0 && fam.$num != this.filter.num) {
        ok = false;
      } else if (this.$events != '' && fam.$event.indexOf(this.$events) == -1) {
        ok = false;
      } else if (this.$contain != '' && fam.$summary.indexOf(this.$contain) == -1 && fam.$fam.indexOf(this.$contain) == -1) {
        ok = false;
      } else if (this.place != 0 && fam.$place!=this.place) {
        ok = false;
      } else if (moment(this.$time1).hour() > 0 || moment(this.$time1).minute() > 0) {
        if (moment(this.$time2).hour() > 0 || moment(this.$time2).minute() > 0) {
          var timeA = moment({
            h: moment(this.$time1).hour(),
            m: moment(this.$time1).minute()
          });
          var timeB = moment({
            h: moment(this.$time2).hour(),
            m: moment(this.$time2).minute()
          });
          var timeC = moment({
            h: moment(fam.$timeLong).hour(),
            m: moment(fam.$timeLong).minute()
          });
          if (!timeC.isBetween(timeA, timeB))
            ok = false;
        } else {
          var timeA = moment({
            h: moment(this.$time1).hour(),
            m: moment(this.$time1).minute()
          });
          var timeC = moment({
            h: moment(fam.$timeLong).hour(),
            m: moment(fam.$timeLong).minute()
          });
          if (!timeC.isSame(timeA)) {
            ok = false
          }

        }
      } else if (moment(this.$date).year() > 10) {
        if (this.date_year) {
          if (moment(this.$date).year() != moment(fam.$date).year() || (this.$date_month && moment(this.$date).month() != moment(fam.$date).month()))
            ok = false
        } else if (!moment(this.$date).isSame(fam.$date))
          ok = false;
      } else if (moment(this.$date_range[0]).year() > 10 && moment(this.$date_range[1]).year() > 10) {
        if (this.$date_range_year) {
          if (moment(this.$date_range[0]).year() > moment(fam.$date).year() || (moment(this.$date_range[1]).year() < moment(fam.$date).year() ||
              (this.$date_range_month && (moment(this.$date_range[0]).month() > moment(fam.$date).month() || moment(this.$date_range[1]).month() < moment(fam.$date).month()))))
            ok = false
        } else if (!moment(fam.$date).isBetween(this.$date_range[0], this.$date_range[1]))
          ok = false;
      }
      // console.log(this.$Date)
      if (!ok) {
        
      } else {
        ToShow.push(fam);
      }
    }
    
    return of(ToShow).pipe();
  }


  selectFam(fam: Fam) {
    this.zfm.$selectedFam = fam;
    
  }

  addNewFam(){
    let fam=new Fam();
    this.zfm.$behavFams.next(this.zfm.$behavFams.getValue().concat(fam));
    this.zfm.$selectedFam=fam;
    this.changeScreen('zfm/look/detail');
    // fam.$event="sab";
    this.refreshShow();

  }













  public get $contain(): string {
    return this.contain;
  }

  

  public set $contain(value: string) {
    this.contain = value;
    this.refreshShow();
  }

  public get $date_year(): boolean {
    return this.date_year;
  }

  public set $date_year(value: boolean) {
    this.date_year = value;this.refreshShow();
  }

  public get $date_range_month(): boolean {
    return this.date_range_month;
  }

  public set $date_range_month(value: boolean) {
    this.date_range_month = value;this.refreshShow();
  }

  public get $date_range_year(): boolean {
    return this.date_range_year;
  }

  public set $date_range_year(value: boolean) {
    this.date_range_year = value;this.refreshShow();
  }

  public get $time2(): Date {
    return this.time2;
  }

  public set $time2(value: Date) {
    this.time2 = value;this.refreshShow();
  }


  public get $local(): string {
    return this.local;
  }

  public set $local(value: string) {
    this.local = value;
  }


  public get $events(): string {
    return this.events;
  }

  public set $events(value: string) {
    this.events = value;this.refreshShow();
  }


  public get $filter(): any {
    return this.filter;
  }

  public set $filter(value: any) {
    this.filter = value;
  }



  public get $date(): Date {
    return this.date;
  }

  public set $date(value: Date) {
    this.date = value;this.refreshShow();
  }

  public get $date_range(): Date[] {
    return this.date_range;
  }

  public set $date_range(value: Date[]) {
    this.date_range = value;this.refreshShow();
  }

  public get $date_month(): boolean {
    return this.date_month;
  }

  public set $date_month(value: boolean) {
    this.date_month = value;this.refreshShow();
  }

  public get $timeLong(): Date {
    return this.timeLong;
  }

  public set $timeLong(value: Date) {
    this.timeLong = value;this.refreshShow();
  }

  public get $time1(): Date {
    return this.time1;
  }

  public set $time1(value: Date) {
    this.time1 = value;this.refreshShow();
  }



  public toggleDateMonth() {
    this.$date_month = !this.date_month;this.refreshShow();
  }
  public toggleDateYear() {
    this.$date_year = !this.date_year;this.refreshShow();
  }
  public toggleDateRangeMonth() {
    this.$date_range_month = !this.date_range_month;this.refreshShow();
  }
  public toggleDateRangeYear() {
    this.$date_range_year = !this.date_range_year;this.refreshShow();
  }
}

