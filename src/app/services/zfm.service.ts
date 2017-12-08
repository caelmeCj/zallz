import {
  Injectable
} from '@angular/core';
import {
  Fam
} from '../models/fam';
import {
  Place
} from '../models/place';

@Injectable()
export class ZfmService {

  private fams: Array<Fam>;
  private places: Array<Place>;

  constructor() {
    this.fams=new Array<Fam>();
    this.places=new Array<Place>();
    this.fillTempData();
    
  }

  public fillTempData(){
      for(var i=0;i<10;i++){
          let fam=new Fam();   
          fam.$fam="Lorem ipsum dolor sit amet orci cursus, amet, nibh, mi conubia sodales tortor, id, fames porttitor iaculis. Leo elit nullam porta, donec hac velit lobortis. Massa arcu sit placerat, suscipit magna in, integer at, nisl phasellus tincidunt primis class ultrices. Justo leo cursus auctor, rutrum vulputate venenatis dui, aliquet sociosqu. Ligula, leo massa, luctus, ultricies metus libero vestibulum, mauris, class ante amet, auctor at. Mi dolor ac, tempor efficitur elementum morbi laoreet vel, vehicula nulla, quam, non cursus, ante. Integer convallis dui, inceptos orci tellus. Quam, ullamcorper nam dictumst integer dapibus nisi, id. Tempor enim, aliquam quis mattis enim dictum malesuada. Donec vel, morbi tristique ad tellus iaculis ligula. Ante, finibus suspendisse tincidunt per dignissim mattis, congue, vitae. Vel orci hendrerit velit litora fusce sociosqu consectetur lorem, adipiscing eget sed quisque nec, et. Quis, convallis pharetra etiam vitae, elit sem, in, quam, ex, mauris, tristique. Egestas mollis conubia vulputate lacinia suspendisse eu, vehicula ornare nec, dignissim ex, venenatis velit libero elit porta. Nibh, congue lorem eu urna amet, aptent ac, augue rhoncus, porta, venenatis in, non eros, dolor, nec, conubia.";
          fam.$summary="Lorem ipsum dolor sit amet ex nisi lectus rhoncus, donec ex, lorem viverra aenean. Urna, ante, arcu volutpat nibh diam maecenas ultrices, tellus tellus. Efficitur odio erat, interdum feugiat nisi, torquent velit risus ac, arcu, pulvinar dui, sit rhoncus donec. Vulputate nisl sodales tortor iaculis fermentum interdum, amet. Vivamus at pulvinar, porttitor, blandit bibendum. Sem posuere et auctor, tincidunt.";
          fam.$date=new Date();
          fam.$event="New Moon";
          this.fams.push(fam);       
      }
  }


	public get $fams(): Fam[] {
		return this.fams;
	}

	public set $fams(value: Fam[]) {
		this.fams = value;
	}


	public get $places(): Array<Place> {
		return this.places;
	}

	public set $places(value: Array<Place>) {
		this.places = value;
	}
	


  public myData() {
    return 'This is my data, man!';
  }
}

