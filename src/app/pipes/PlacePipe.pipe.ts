import { Pipe, PipeTransform } from '@angular/core';
import {ZfmService} from '../services/zfm.service';
@Pipe({
  name: 'placepipe'
})
export class PlacePipePipe implements PipeTransform {

  constructor(private zfm: ZfmService) {
    
  }
  transform(value: number, toReturn: String): any {
    let place=this.zfm.getPlaceById(value);
    return place[""+toReturn];
  }

}