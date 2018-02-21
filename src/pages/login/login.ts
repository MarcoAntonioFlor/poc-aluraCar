import { UsuarioService } from './../../domain/usuario/usuario.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email:string = 'joao@alura.com.br';
  public senha:string = 'alura123';

  constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl:AlertController,
        private _usuarioService: UsuarioService  ) {
  }

  login(){
    this._usuarioService
      .login(this.email, this.senha)
      .then(() => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch(() => {
        this.alertCtrl.create({
          title:'Login',
          subTitle: 'Email ou senha inválidos',
          buttons:[{text:'OK'}]
        }).present();
      });

  }
}
