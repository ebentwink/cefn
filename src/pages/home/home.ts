import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToolsPage } from '../tools/tools';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  tool(){
    this.navCtrl.push(ToolsPage);
  }
}
