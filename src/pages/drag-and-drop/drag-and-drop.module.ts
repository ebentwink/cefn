import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DragAndDropPage } from './drag-and-drop';

@NgModule({
  declarations: [
    DragAndDropPage,
  ],
  imports: [
    IonicPageModule.forChild(DragAndDropPage),
  ],
})
export class DragAndDropPageModule {}
