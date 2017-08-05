import { FotoService } from './../foto/foto.service';
import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FotoComponent } from '../foto/foto.component';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent
  formCadastro: FormGroup
  servico: FotoService


  constructor(conexaoApi: FotoService, formBuilder: FormBuilder) { 
    
    this.servico = conexaoApi

    this.formCadastro = formBuilder.group({
      titulo: ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      url: ['', Validators.required],
      descricao: ['']
    })
  }

  cadastrar(submit: Event) {
    submit.preventDefault();
    this.servico.salvar(this.foto)

    
    .subscribe(
      () => {
        console.log('cadastrou')
        this.foto = new FotoComponent();
      }
    )

    
  }


  ngOnInit() {
  }

}
