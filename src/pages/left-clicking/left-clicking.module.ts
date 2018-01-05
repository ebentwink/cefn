import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeftClickingPage } from './left-clicking';

@NgModule({
  declarations: [
    LeftClickingPage,
  ],
  imports: [
    IonicPageModule.forChild(LeftClickingPage),
  ],
})
export class LeftClickingPageModule {}
