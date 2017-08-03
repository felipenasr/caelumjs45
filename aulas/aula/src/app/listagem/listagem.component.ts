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

  constructor(ajax: Http){
    ajax.get('http://localhost:3000/v1/fotos')
    .map(response => response.json())
    .subscribe(
      fotosEmJson =>{
        this.fotos = fotosEmJson
      },
      erro => console.log(erro)
      
    );
  }
}
