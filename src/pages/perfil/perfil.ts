import { UsuarioService } from './../../domain/usuario/usuario.service';
import { Usuario } from './../../domain/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public usuarioService:UsuarioService) {
  }
  get usuarioLogado(){
    console.log( this.usuarioService.obterUsuarioLogado())

    return this.usuarioService.obterUsuarioLogado();
  }
}
