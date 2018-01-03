import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectingPage } from '../selecting/selecting';
import { DoubleClickingPage } from '../double-clicking/double-clicking';
import { RightClickingPage } from '../right-clicking/right-clicking';
import { LeftClickingPage } from '../left-clicking/left-clicking';
import { DragAndDropPage } from '../drag-and-drop/drag-and-drop';

/**
 * Generated class for the ToolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html',
})
export class ToolsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolsPage');
  }

  selecting(){
    this.navCtrl.push(SelectingPage);
  }
do(){
  this.navCtrl.push(DoubleClickingPage);
}
 co(){
   this.navCtrl.push(RightClickingPage);
 }
  ba(){
   this.navCtrl.push(LeftClickingPage);
 }
 fa(){
   this.navCtrl.push(DragAndDropPage);
 }
  }


