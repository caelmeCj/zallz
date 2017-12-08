import {Place} from './place';

export class Fam {
    private num:number;
    private fam:String;
    private summary:String;
    private event:String;
    private date:Date;
    private place:Place;
    private timeLong:String;

    constructor(field){
        this.num=field.num;
        this.fam=field.fam;
        this.summary=field.summary;
        this.event=field.event;
        this.date=field.date;
        this.place=field.place;
        this.timeLong=field.timeLong;
    }

    


	public get $place(): Place {
		return this.place;
	}

	public set $place(value: Place) {
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

	public get $timeLong(): String {
		return this.timeLong;
	}

	public set $timeLong(value: String) {
		this.timeLong = value;
	}
    

}
