export class Base {
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
}
