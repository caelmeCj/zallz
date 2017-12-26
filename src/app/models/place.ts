export class Place {
	private num:number;
    private place:String;
    private lat:number;
    private lon:number;
	private displayName:String;
	private ref:String;
	private created:Date;
	private modified:Date;
	private contactName:String;
	private contactPhone:String;
	private contactMail:String;
	private postCode:String;


	constructor() {
       
	}
    

	public get $displayName(): String {
		return this.displayName;
	}

	public set $displayName(value: String) {
		this.displayName = value;
	}

	public get $ref(): String {
		return this.ref;
	}

	public set $ref(value: String) {
		this.ref = value;
	}

	public get $created(): Date {
		return this.created;
	}

	public set $created(value: Date) {
		this.created = value;
	}

	public get $modified(): Date {
		return this.modified;
	}

	public set $modified(value: Date) {
		this.modified = value;
	}

	public get $contactName(): String {
		return this.contactName;
	}

	public set $contactName(value: String) {
		this.contactName = value;
	}

	public get $contactPhone(): String {
		return this.contactPhone;
	}

	public set $contactPhone(value: String) {
		this.contactPhone = value;
	}

	public get $contactMail(): String {
		return this.contactMail;
	}

	public set $contactMail(value: String) {
		this.contactMail = value;
	}

	public get $postCode(): String {
		return this.postCode;
	}

	public set $postCode(value: String) {
		this.postCode = value;
	}

	public get $num(): number {
		return this.num;
	}

	public set $num(value: number) {
		this.num = value;
	}
	

	public get $place(): String {
		return this.place;
	}

	public set $place(value: String) {
		this.place = value;
	}

	public get $lat(): number {
		return this.lat;
	}

	public set $lat(value: number) {
		this.lat = value;
    }
    

	public get $lon(): number {
		return this.lon;
	}

	public set $lon(value: number) {
		this.lon = value;
	}
    
    
}
