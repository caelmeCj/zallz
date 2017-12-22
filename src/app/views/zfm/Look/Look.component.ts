import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input
} from '@angular/core';
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
  private filter: any = {
    event: '',
    contain: '',
    date: moment('01/01/0001', 'DD/MM/YYYY').toDate(),
    date_range: [moment('01/01/0001', 'DD/MM/YYYY').toDate(), moment('01/01/0001', 'DD/MM/YYYY').toDate()],
    place: '',
    timeLong: moment('00:00', 'hh:mm').toDate(),
    time1: moment('00:00', 'hh:mm').toDate(),
    time2: moment('00:00', 'hh:mm').toDate(),
    num: 0,
  };
  myTime: Date = new Date();
  private hideLook: number[] = [];
  // private famToShow:Map<Fam,boolean>;
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
    this.dpConfig.dateInputFormat="DD/MM/YYYY";
    this.dpConfig.maxDate=new Date();
    this.dpConfig.value=new Date();
  }

  ngOnInit() {
    this.changeScreen("zfm/look");
    // moment.locale('fr');
  }


  getToShow() {
    this.hideLook = [];
    let ToShow: Fam[] = [];
    // console.log(moment(this.filter.date).format("YYYY-MM-DD"),moment(this.zfm.$fams[0].$date).format("YYYY-MM-DD"))
    for (var fam of this.zfm.$fams) {
      var ok = true;
      if (this.filter.num != 0 && fam.$num != this.filter.num) {
        ok = false;
      } else if (this.filter.event != '' && fam.$event.indexOf(this.filter.event) == -1) {
        ok = false;
      } else if (this.filter.contain != '' && fam.$summary.indexOf(this.filter.contain) == -1 && fam.$fam.indexOf(this.filter.contain) == -1) {
        ok = false;
      } else if (this.filter.place != '' && fam.$place.$place.indexOf(this.filter.place) == -1) {
        ok = false;
      } else if (moment(this.filter.time1).hour() > 0 && moment(this.filter.time2).hour() > 0) {
        var timeA = moment({
          h: moment(this.filter.time1).hour(),
          m: moment(this.filter.time1).minute()
        });
        var timeB = moment({
          h: moment(this.filter.time2).hour(),
          m: moment(this.filter.time2).minute()
        });
        var timeC = moment({
          h: moment(fam.$timeLong).hour(),
          m: moment(fam.$timeLong).minute()
        });
        if (!timeC.isBetween(timeA, timeB))
          ok = false;
      } else if (moment(this.filter.date).year() > 10 && !moment(this.filter.date).isSame(fam.$date)) {
        ok = false;
      } else if (moment(this.filter.date).year() > 10 && !moment(this.filter.date).isSame(fam.$date)) {
        ok = false;
      }
      // console.log(this.filter.Date)
      if (!ok) {
        this.hideLook.push(fam.$num);
      } else {
        ToShow.push(fam);
      }
    }
    return ToShow;
    // return this.zfm.$fams; 
  }

  Change() {
    // this.onChanged.emit(true);
  }

  selectFam(fam: Fam) {
    this.zfm.$selectedFam = fam;

    this.changeScreen('zfm/look/detail');
  }

  onChanged() {

  }

  public set $dateFilter(value: any) {
    // this.dateObj = value;
    this.filter.date = moment("" + value.date.day + "/" + value.date.month + "/" + value.date.year, "DD/MM/YYYY").toDate();
  }

}
