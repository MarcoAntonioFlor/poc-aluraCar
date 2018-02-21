import { CadastroPage } from './../cadastro/cadastro';
import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, NavController } from 'ionic-angular';
import { Carro } from '../../domain/carro/carro';
import { Acessorio } from './../../domain/carro/acessorio';

@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html'
})
export class EscolhaPage implements OnInit{

  public carro: Carro;
  public acessorios: Acessorio[];
  private _precoTotal:number;

  constructor(public navParams:NavParams,
    public alertCtrl: AlertController,
    public navCtrl:NavController){
  }

  ngOnInit(){
    this.carro = this.navParams.get('carroSelecionado');
    this._precoTotal = this.carro.preco;
    this.acessorios = [
      new Acessorio('Freio ABS',  800 ),
      new Acessorio('Ar-condicionado',  1000 ),
      new Acessorio('MP3 Player',  500 ),
    ];
  }

  adicionaAcessorio(checked:boolean,acessorio:Acessorio){
    this._precoTotal =
      checked
      ? this._precoTotal += acessorio.preco
      : this._precoTotal -= acessorio.preco;
  }

  get precoTotal(){
    return this._precoTotal;
  }


  avancaNoAgendamento() {

    this.navCtrl.push(CadastroPage, {
      carro: this.carro,
      precoTotal: this.precoTotal
    });

    // let confirm = this.alertCtrl.create({
    //   title: 'Use this lightsaber?',
    //   message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
    //   buttons: [
    //     {
    //       text: 'Bom',
    //       handler: () => {
    //         console.log('Bon');
    //       }
    //     },
    //     {
    //       text: 'Médio',
    //       handler: () => {
    //         console.log('Médio');
    //       }
    //     },
    //     {
    //       text: 'Ruim',
    //       handler: () => {
    //         console.log('Ruim');
    //       }
    //     }
    //   ]
    // });
    // confirm.present();
  }
}
