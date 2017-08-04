import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent


  http: Http

  constructor(conexaoAPi: Http) { 
    this.http = conexaoAPi
  }

  cadastrar(submit: Event) {
    submit.preventDefault();

    let cabecalho = new Headers()
    cabecalho.append('Content-Type', 'application/json')


    this.http.post(
      'http://localhost:3000/v1/fotos',
      JSON.stringify(this.foto) ,
      { headers: cabecalho }
    )
    .subscribe(
      () => {
        console.log('cadastrou')
        this.foto = new FotoComponent();
      }
    )

    console.log(this.foto);
    
  }

  ngOnInit() {
  }

}
