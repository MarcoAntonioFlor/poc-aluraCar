import { EscolhaPage } from './../escolha/escolha';

import { Component, OnInit } from '@angular/core';

import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  public carros;

  constructor(public navCtrl: NavController,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) {
  }

  ngOnInit(){

    let loader = this._loadingCtrl.create({
      content: 'buscando novos carros. Aguarde...'
    });
    loader.present();

    this._http
      .get('https://aluracar.herokuapp.com/')
      .map(response => response.json())
      .toPromise()
      .then(carros => {
        this.carros = carros;
        loader.dismiss();
      })
      .catch( error => {
        this._alertCtrl.create({
          title: 'Erro',
          message: 'Erro de conexão',
          buttons: [{ text: 'Estou ciente!' }]
        }).present();
        loader.dismiss();
      });
  }

  seleciona(carro){
    this.navCtrl.push(EscolhaPage, { carroSelecionado: carro});
  }
}
