import { LoginPage } from './../pages/login/login';
import { HomePage } from './../pages/home/home';
import { AgendamentoPage, } from './../pages/agendamento/agendamento';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPage } from '../pages/perfil/perfil';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;

  public paginas = [
    {titulo:"Agendamento", component:AgendamentoPage},
    {titulo:"Perfil", component:PerfilPage}
  ];

  @ViewChild(Nav)
  public nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrePagina(pagina){
    this.nav.push(pagina.component);
  }
}
