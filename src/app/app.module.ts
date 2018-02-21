import { PerfilPage } from './../pages/perfil/perfil';
import { LoginPage } from './../pages/login/login';
import { AgendamentoService } from './../domain/agendamento/Agendamento.service';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EscolhaPage } from './../pages/escolha/escolha';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage, IonicStorageModule } from '@ionic/storage';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AgendamentoPage } from '../pages/agendamento/agendamento';
import { UsuarioService } from '../domain/usuario/usuario.service';

function provideStorage() {

  return new Storage({
    name: 'aluracar',
    storeName: 'agendamentos'
  });

}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EscolhaPage,
    AvaliacaoPage,
    CadastroPage,
    AgendamentoPage,
    LoginPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EscolhaPage,
    AvaliacaoPage,
    CadastroPage,
    AgendamentoPage,
    LoginPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AgendamentoService,
    UsuarioService
  ]
})
export class AppModule {}
