import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToolsPage } from '../tools/tools';
import { DevelopersPage } from '../developers/developers';
import { KeyboardPage } from '../keyboard/keyboard';

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

  bam(){
    this.navCtrl.push(DevelopersPage);
  }

  dam(){
    this.navCtrl.push(KeyboardPage);
  }

}
