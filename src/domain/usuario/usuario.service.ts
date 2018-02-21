import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
@Injectable()
export class UsuarioService{


  private _usuarioLogado: Usuario;

  constructor(private _http:Http){}

  login(email:string, senha:string){

    let api = `https://aluracar.herokuapp.com/login?email=${email}&senha=${senha}`;

    return this._http
        .get(api)
        .map(res => res.json().usuario)
        .toPromise()
        .then(dado => {
          console.log(dado)
          let usuario = new Usuario(dado.nome, dado.dataNascimento, dado.email, dado.telefone)
          this._usuarioLogado = usuario;
          console.log(usuario)
          return usuario;
        });
  }

  obterUsuarioLogado(){
    return this._usuarioLogado;
  }
}
