import { Observable } from 'rxjs';
import { FotoService } from './../foto/foto.service';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { FotoComponent } from "../foto/foto.component";


@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})


export class ListagemComponent {
  title = "app";
  fotos: FotoComponent[] = [];
  servico: FotoService

  constructor(servico: FotoService){
    this.servico = servico
  
    servico.listar()
    .subscribe(
      fotosEmJson =>{
        this.fotos = fotosEmJson
      },
      erro => console.log(erro)
    );

  }

  remover(id){
    this.servico.deletar(id)
              .subscribe(
                ()=> {
                  this.fotos = this.fotos.filter(
                    fotoLista => fotoLista._id != id
                  )
                }
              )
  }
}
