import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  constructor() { }

  cadastrar(submit: Event) {
    submit.preventDefault();

    console.log('foi');
    
    
  }

  ngOnInit() {
  }

}
