
import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {WalkpagetwoPage} from './pages/walkpagetwo/walkpagetwo';
import {WalkPage} from './pages/walkpage/walkpage';
import {HomePage} from './pages/home/home';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
  
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = WalkPage;// WalkpagetwoPage;

    platform.ready().then(() => {
      
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
