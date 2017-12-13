export class Place {
    private place:String;
    private lat:number;
    private lon:number;


	constructor() {
       
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
