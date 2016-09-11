import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TourData } from '../../models/slidermodel';


@Injectable()
export class SlideService {

  slideData:any;

  constructor(public http: Http) {}

  load(){
    if( this.slideData ){
      return Promise.resolve(this.slideData);
    }
    return new Promise(resolve => {
      this.http.get('data/data.json').map(res => <Array<TourData>>(res.json()))
      .subscribe( pg => {
          this.slideData = pg;
          resolve(this.slideData);
      });
    });

  }//End getSlides

  

}

