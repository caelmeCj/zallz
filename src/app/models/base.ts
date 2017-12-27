export class Base {
    private status:String="init";

    fillFromJSON(json: string) {
        var jsonObj = JSON.parse(json);
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName]
        }
    }
    fillFromObj(obj:any){
        for (var propName in obj) {
            // console.log(propName,obj[propName]);
            this[propName] = obj[propName];
        }
    }

	public get $status(): String {
		return this.status;
	}

	public set $status(value: String) {
		this.status = value;
	}
    
}
