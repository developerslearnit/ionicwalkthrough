import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WalkpagetwoPage} from '../../pages/walkpagetwo/walkpagetwo';
import {WalkPage} from '../../pages/walkpage/walkpage';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
  
  }

  playOne(){
    this.navCtrl.push(WalkPage);
  }


  playTwo(){
this.navCtrl.push(WalkpagetwoPage);
  }


}
