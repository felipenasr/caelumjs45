import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "app";
  fotos: Object[] = [];

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
