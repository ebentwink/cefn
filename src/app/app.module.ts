import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ToolsPage } from '../pages/tools/tools';
import { SelectingPage } from '../pages/selecting/selecting';
import { DoubleClickingPage } from '../pages/double-clicking/double-clicking';
import { RightClickingPage } from '../pages/right-clicking/right-clicking';
import { LeftClickingPage } from '../pages/left-clicking/left-clicking';
import { DragAndDropPage } from '../pages/drag-and-drop/drag-and-drop';
import { DevelopersPage } from '../pages/developers/developers';
import { KeyboardPage } from '../pages/keyboard/keyboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ToolsPage,
    SelectingPage,
    DoubleClickingPage,
    RightClickingPage,
    LeftClickingPage,
    DragAndDropPage,
    DevelopersPage,
    KeyboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ToolsPage,
    SelectingPage,
    DoubleClickingPage,
    RightClickingPage,
    LeftClickingPage,
    DragAndDropPage,
    DevelopersPage,
    KeyboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
