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

  private fams: Fam[];
  private place: Place[];

  constructor() {

  }

  public fillTempData(){
      for(var i=0;i<10;i++){
          let fam=new Fam({
            num:1,
            fam:'Lorem ipsum dolor sit amet enim facilisis efficitur ac, aliquam gravida porttitor class taciti sociosqu habitasse. Id vehicula sociosqu lacinia, etiam auctor porta. Hac orci, sit in primis. Augue enim, mauris, commodo efficitur sit cras in, ac. Feugiat venenatis habitasse amet interdum, vitae nunc, facilisis adipiscing. Pulvinar mauris, ligula, ut auctor, vel odio, dolor, vestibulum, purus congue. Orci nostra, sem suscipit quam volutpat. Pellentesque class phasellus interdum integer gravida ante, risus sagittis, per. Et, metus laoreet sodales tempor, non, fringilla interdum, vulputate lacus ex, quam. Sagittis, taciti hendrerit luctus, feugiat, per nullam hac mauris, iaculis porta, adipiscing lobortis enim auctor, justo malesuada. Sed, mollis aliquet id, tortor nisi, consequat facilisis et, ullamcorper ante rhoncus dui lacus mattis, viverra quis nulla volutpat. Congue, ut tortor, libero nibh, neque. Laoreet, diam interdum eu eget inceptos nec urna, sed laoreet taciti luctus. Congue taciti in euismod, primis a hendrerit commodo, ad leo rhoncus, sagittis, congue, ac, mattis. Tempus non primis sociosqu eros. Mollis molestie cursus inceptos sodales orci ipsum. Conubia nec, massa, eu id, laoreet, rhoncus, hac ligula donec magna quis eros, ligula, leo efficitur fringilla, molestie dolor. Et, vulputate integer finibus, cursus. Nisi, metus orci sapien congue, mattis, litora sociosqu feugiat, purus. Himenaeos sagittis, euismod vehicula sed blandit, ante sollicitudin cras magna. Porta, sem, imperdiet eleifend suscipit inceptos primis congue, quam, laoreet auctor dictum cursus nostra, orci, nec. Vehicula eros varius, et quis feugiat, blandit, eu porta, urna, at eleifend, nisl phasellus. Quis turpis viverra vestibulum facilisis auctor ultricies odio, sodales per porta, ac mauris, dolor. Ligula vivamus ornare velit interdum, ex, vitae, ultricies orci diam eros, in, luctus. Quis finibus, arcu dui, ultrices, lobortis pulvinar. Sociosqu sollicitudin at, urna dolor, dictum. Fusce hendrerit aenean viverra maximus ultrices, himenaeos porttitor. Porttitor per fusce nulla turpis vestibulum, sapien enim, semper. Nullam odio, arcu, aliquam tellus, vestibulum lobortis risus. Orci, augue consectetur nisl feugiat non blandit euismod, tellus odio, viverra ante. '+i,
            summary:'Lorem ipsum dolor sit amet facilisis interdum placerat egestas est quis, imperdiet condimentum leo platea. In nunc iaculis quam, enim interdum, magna. Fringilla non, ornare viverra gravida molestie dui posuere, nisl odio, semper laoreet, non. A risus phasellus tincidunt vitae, nulla euismod elit, litora neque, nec facilisis nostra, tristique sit mollis. Nam mauris pharetra purus magna interdum porta, odio, egestas class mauris, diam maximus curabitur eleifend porttitor. Quisque eleifend, fringilla, adipiscing tristique nec elit lectus, etiam praesent duis lacinia, scelerisque nulla, ac. Vitae ante torquent mauris, proin fames tristique enim, pulvinar, accumsan molestie. Ante, sodales dictum orci, finibus elit, orci porta felis morbi pharetra nibh fermentum proin sapien finibus, leo, gravida.'+i,
            event:'New moon',
          });   
          this.fams.push(fam);       
      }
  }


	public get $fams(): Fam[] {
		return this.fams;
	}

	public set $fams(value: Fam[]) {
		this.fams = value;
	}

	public get $place(): Place[] {
		return this.place;
	}

	public set $place(value: Place[]) {
		this.place = value;
	}


  public myData() {
    return 'This is my data, man!';
  }
}

