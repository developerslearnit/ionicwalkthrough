
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { SlideService } from '../../providers/slide-service/slide-service';
import {HomePage} from '../../pages/home/home';
import { TourData } from '../../models/slidermodel';


@Component({
  templateUrl: 'build/pages/walkpage/walkpage.html',
  providers: [SlideService]
})

export class WalkPage {
  @ViewChild("tourSlide") slider: Slides;
  slidePages: TourData[];
  isFirstPage = true;
  isLastPage = false;

  constructor(private navCtrl: NavController, slideData: SlideService) {
    slideData.load()
      .then(res => (this.slidePages = res.pages))
      .catch(err => (console.log(err)));
  }


  onSlideChangeStart(slider) {
    this.isFirstPage = slider.isBeginning;
    this.isLastPage = slider.isEnd;
  }


  moveNext() {
    this.slider.slideNext();
  }
  movePrevious() {
    this.slider.slidePrev();
  }

  startApp() {
    this.navCtrl.push(HomePage);
  }


}
