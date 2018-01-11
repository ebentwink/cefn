import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoubleClickingPage } from './double-clicking';

@NgModule({
  declarations: [
    DoubleClickingPage,
  ],
  imports: [
    IonicPageModule.forChild(DoubleClickingPage),
  ],
})
export class DoubleClickingPageModule {}
