import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LivrosStorageProvider } from '../providers/livros-storage/livros-storage';
import { LivrosNaoLidosProvider } from '../providers/livros-nao-lidos/livros-nao-lidos';
import { LivrosLidosProvider } from '../providers/livros-lidos/livros-lidos';
import { LivrosApiProvider } from '../providers/livros-api/livros-api';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivrosStorageProvider,
    LivrosNaoLidosProvider,
    LivrosLidosProvider,
    LivrosApiProvider
  ]
})
export class AppModule {}
