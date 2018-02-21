import { AgendamentoDao } from './agendamento.dao';
import { Storage } from '@ionic/storage';
import { Agendamento } from './Agendamento';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AgendamentoService{

  constructor(private _http: Http,
    private _agendamentoDAO:AgendamentoDao){}

  public agendar(agendamento:Agendamento){

    let url = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&preco=${agendamento.valor}&nome=${agendamento.nome}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;
    this._http
        .get(url)
        .toPromise()
        .then(() => {
          agendamento.confirmado = true;
          this._agendamentoDAO.salva(agendamento);
          return agendamento.confirmado;
        });
  }

}



