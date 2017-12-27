import {Place} from './place';
import {Base} from './base';
import * as moment from 'moment';
export class Fam extends Base{
    private num:number=0;
    private fam:String="";
    private summary:String="";
    private event:String="";
    private date:Date;
	private dateString:String;
	private placeClass:Place;
	private place:number=0;
    private timeLong:Date;
	private dateObj:any;
	

    // constructor(){}


	constructor() {
        super();
	}



	
    

	public get $placeClass(): Place {
		return this.placeClass;
	}

	public set $placeClass(value: Place) {
		this.placeClass = value;
	}

	public get $place(): number {
		return this.place;
	}

	public set $place(value: number) {
		this.place = value;
	}
	

	public get $num(): number {
		return this.num;
	}

	public set $num(value: number) {
		this.num = value;
	}

	public get $fam(): String {
		return this.fam;
	}

	public set $fam(value: String) {
		this.fam = value;
	}

	public get $summary(): String {
		return this.summary;
	}

	public set $summary(value: String) {
		this.summary = value;
	}

	public get $event(): String {
		return this.event;
	}

	public set $event(value: String) {
		this.event = value;
	}

	public get $date(): Date {
		return this.date;
	}

	public set $date(value: Date) {
		this.date = value;
	}


	public get $dateString(): String {
		return this.dateString;
	}

	public set $dateString(value: String) {
		this.dateString = value;
	}	


	public get $timeLong(): Date {
		return this.timeLong;
	}

	public set $timeLong(value: Date) {
		this.timeLong = value;
	}
	


	public get $dateObj(): any  {
		return this.dateObj;
	}

	public set $dateObj(value: any ) {

		this.dateObj = value;
		
		this.date=moment(""+this.dateObj.date.day+"/"+this.dateObj.date.month+"/"+this.dateObj.date.year,"DD/MM/YYYY").toDate();
	}
	
  
}
