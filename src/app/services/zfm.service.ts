import {
  Injectable
} from '@angular/core';
import {
  Fam
} from '../models/fam';
import {
  Place
} from '../models/place';
import {
  Http,
  Response,
  Headers
} from '@angular/http';
import {
  Observable,BehaviorSubject,Subject
} from 'rxjs';
import {List} from 'immutable';
import {
  WebApiObservableService
} from './web-api-observable.service';
import {
  Restangular
} from 'ngx-restangular';
@Injectable()
export class ZfmService {

  private famNumberChange$:Observable<Number>;

  private fams: Array < Fam > ;
  private places: Array < Place > ;
  private saveFams: Array < Fam > ;
  private savePlaces: Array < Place > ;
  private selectedFam: Fam;
  private baseUrl: string = 'http://localhost:5000';
  private allFams: Observable < Fam[] > ;
  private baseFam = this.restangular.all('fam');
  private subFams:Subject<Fam[]>;
  private behavFams:BehaviorSubject<Array<Fam>>=new BehaviorSubject<Array<Fam>>([]);
  private behavPlace:BehaviorSubject<Array<Place>>=new BehaviorSubject<Array<Place>>([]);

  constructor(private _http:Http,private restangular: Restangular) {
    this.fams = new Array < Fam > ();
    this.places = new Array < Place > ();
    let incognito=new Place();
    incognito.$num=0;
    incognito.$displayName="Inconnu";
    this.behavPlace.next(this.behavPlace.getValue().concat(incognito));
    this.getAllPlaces().subscribe(res=>{
      this.behavPlace.next(this.behavPlace.getValue().concat(res));
    });

    this.getAllFams().subscribe(res=>{
      this.behavFams.next(res);
    });
    





    
    
    // this.getAllFams();
    // this.refreshFams();
    
  }

  

  public fillTempData() {
    let place = new Place();
    for (var i = 0; i < 1500; i++) {
      let fam = new Fam();
      fam.$num = i;
      fam.$fam = "Lorem ipsum dolor sit amet orci cursus, amet, nibh, mi conubia sodales tortor, id, fames porttitor iaculis. Leo elit nullam porta, donec hac velit lobortis. Massa arcu sit placerat, suscipit magna in, integer at, nisl phasellus tincidunt primis class ultrices. Justo leo cursus auctor, rutrum vulputate venenatis dui, aliquet sociosqu. Ligula, leo massa, luctus, ultricies metus libero vestibulum, mauris, class ante amet, auctor at. Mi dolor ac, tempor efficitur elementum morbi laoreet vel, vehicula nulla, quam, non cursus, ante. Integer convallis dui, inceptos orci tellus. Quam, ullamcorper nam dictumst integer dapibus nisi, id. Tempor enim, aliquam quis mattis enim dictum malesuada. Donec vel, morbi tristique ad tellus iaculis ligula. Ante, finibus suspendisse tincidunt per dignissim mattis, congue, vitae. Vel orci hendrerit velit litora fusce sociosqu consectetur lorem, adipiscing eget sed quisque nec, et. Quis, convallis pharetra etiam vitae, elit sem, in, quam, ex, mauris, tristique. Egestas mollis conubia vulputate lacinia suspendisse eu, vehicula ornare nec, dignissim ex, venenatis velit libero elit porta. Nibh, congue lorem eu urna amet, aptent ac, augue rhoncus, porta, venenatis in, non eros, dolor, nec, conubia.";
      fam.$summary = "Lorem ipsum dolor sit amet ex nisi lectus rhoncus, donec ex, lorem viverra aenean. Urna, ante, arcu volutpat nibh diam maecenas ultrices, tellus tellus. Efficitur odio erat, interdum feugiat nisi, torquent velit risus ac, arcu, pulvinar dui, sit rhoncus donec. Vulputate nisl sodales tortor iaculis fermentum interdum, amet. Vivamus at pulvinar, porttitor, blandit bibendum. Sem posuere et auctor, tincidunt.";
      fam.$date = new Date();
      fam.$dateObj = {
        date: {
          year: 2018,
          month: 10,
          day: 9
        }
      };
      fam.$event = "new_moon";
      // fam.$place = place;
      place.$place = "cite_itaosy"
      fam.$timeLong = new Date();
      if (i == 2) fam.$event = "sab";
      this.fams.push(fam);
    }
  }

  getAll() {

    return Observable.from(this.baseFam.map(fams=>fams[1].data).map((fams:Array<any>)=>{
      let result:Array<Fam>=[];
      fams.forEach((fam)=>{
        let f=new Fam();
        f.fillFromObj(fam);
        console.log("---"+f);
        result.push(f);
      });
      
      return result;
      
    }));

  }

  getAllFams(){
    // console.log("jklm")
    return this._http.get(this.baseUrl+"/fam")
    .map( (responseData) => {
      // console.log( responseData.json())
      return responseData.json()[1].data;
    }).map((fams: Array<any>) => {
      let result:Array<Fam> = [];
      if (fams) {
        fams.forEach((fam) => {
          let f=new Fam();
          f.fillFromObj(fam);
          f.$status="saved";
          result.push(f);
          
        });
      }
      this.behavFams.next(result);
      return result;
    });
  }
  getAllPlaces(){
    // console.log("jklm")
    
    // this.behavPlace.next(this.behavPlace.getValue().concat(incognito));
    return this._http.get(this.baseUrl+"/places")
    .map( (responseData) => {
      // console.log( responseData.json())
      return responseData.json()[1].data;
    }).map((fams: Array<any>) => {
      let result:Array<Place> = [];
      if (fams) {
        fams.forEach((fam) => {
          let f=new Place();
          f.fillFromObj(fam);
          f.$status="saved";
          result.push(f);
          
        });
      }
      // this.behavPlace.next(result);
      return result;
    });
    
  }
  getPlaceById(id:number){  
    for(let place of this.$behavPlace.getValue()){
      if(place.$num==id){
        return place;
      }
    }
  }

  

  refreshFams(){
    // this.allFams=this.getAllFams();
    // this.allFams.combineLatest(this.getAllFams());
    // this.subFams.combineLatest(this.getAllFams());
    // this.subFams=this.getAllFams();
    // this.subFams.
  }

  postFam(model:any){
    return this._http.post(this.baseUrl+"/fam",model)
    .map(res=>res.json());
  }



  

  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }





  public get $selectedFam(): Fam {
    return this.selectedFam;
  }

  public set $selectedFam(value: Fam) {
    this.selectedFam = value;
  }


  public get $fams(): Fam[] {
    return this.fams;
  }

  public set $fams(value: Fam[]) {
    this.fams = value;
  }


  public get $places(): Array < Place > {
    return this.places;
  }

  public set $places(value: Array < Place > ) {
    this.places = value;
  }


	public get $behavPlace(): BehaviorSubject<Array<Place>> {
		return this.behavPlace;
	}

	public set $behavPlace(value: BehaviorSubject<Array<Place>>) {
		this.behavPlace = value;
	}


  public myData() {
    return 'This is my data, man!';
  }
  
	public get $subFams(): Subject<Fam[]> {
		return this.subFams;
	}

	public set $subFams(value: Subject<Fam[]>) {
		this.subFams = value;
	}


	public get $allFams(): Observable < Fam[] >  {
		return this.allFams;
	}

	public set $allFams(value: Observable < Fam[] > ) {
		this.allFams = value;
	}


	public get $famNumberChange$(): Observable<Number> {
		return this.famNumberChange$;
	}

	public set $famNumberChange$(value: Observable<Number>) {
		this.famNumberChange$ = value;
	}
  



	public get $behavFams(): BehaviorSubject<Array<Fam>> {
		return this.behavFams;
	}

	public set $behavFams(value: BehaviorSubject<Array<Fam>>) {
		this.behavFams = value;
	}
	

}
