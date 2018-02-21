import { Agendamento } from './Agendamento';
import { Injectable } from '@angular/core';
@Injectable()
export class AgendamentoDao{

  constructor(private _storage: Storage){}

  private _getKey(agendamento:Agendamento){
    return agendamento.email + agendamento.data.substr(0,10);
  }

  salva(agendamento:Agendamento){
    let key = this._getKey(agendamento);
    return this._storage.set(key, agendamento);
  }

  ehAgendamentoDuplicado(agendamento:Agendamento){
    let key = this._getKey(agendamento);
    return this._storage
      .get(key)
      .then(dado => {
        return dado?true:false;
      });
  }



}
