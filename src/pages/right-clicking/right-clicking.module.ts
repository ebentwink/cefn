import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RightClickingPage } from './right-clicking';

@NgModule({
  declarations: [
    RightClickingPage,
  ],
  imports: [
    IonicPageModule.forChild(RightClickingPage),
  ],
})
export class RightClickingPageModule {}
