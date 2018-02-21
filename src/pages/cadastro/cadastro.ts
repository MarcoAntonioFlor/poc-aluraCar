import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Agendamento } from '../../domain/agendamento/agendamento';
import { AgendamentoService } from '../../domain/agendamento/Agendamento.service';

@Component({
  templateUrl: 'cadastro.html',
})
export class CadastroPage implements OnInit{

  public carro;
  public precoTotal;

  public agendamento: Agendamento
  private alerta:Alert;

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private _alertCtrl: AlertController,
      private _agendamentoService: AgendamentoService) {


    this.carro = this.navParams.get('carro');
    this.precoTotal = this.navParams.get('precoTotal');
    this.agendamento = new Agendamento(this.carro, this.precoTotal);

    this.alerta = this._alertCtrl.create({
      title:'Agendamento',
      buttons:[{text:'OK', handler: () => {
         this.navCtrl.setRoot(HomePage);
      }}]
    });
  }

  ngOnInit(){

  }

  agendar(){

    console.log(this.agendamento);

    this._agendamentoService
      .agendar(this.agendamento)
      ? this.alerta.setSubTitle('Agendamento realizado com sucesso!')
      :  this.alerta.setSubTitle('Erro ao agendar, tente novamente mais tarde.');
  }
}
