import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

import { FotoService } from './../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent
  formCadastro: FormGroup
  servico: FotoService
  roteamento: Router
  rota: ActivatedRoute
  constructor(conexaoApi: FotoService, formBuilder: FormBuilder,rota: ActivatedRoute, router: Router) { 


    this.roteamento = router
    this.servico = conexaoApi

    rota.params.subscribe(
      (parametros)=>{
        if(parametros.id){
          this.servico.obterFoto(parametros.id)
                          .subscribe(
                                (foto)=>{
                                  this.foto = foto;
                                }
                              )
        }
        
      }
    );
    

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
    if(this.foto._id){
      this.servico.editar(this.foto)
                  .subscribe(
                  () => {
                    this.roteamento.navigate([''])
                  }
                )
    }else{
      this.servico.salvar(this.foto)
          .subscribe(
            () => {
              console.log('cadastrou')
              this.foto = new FotoComponent();
            }
          )

    }

    

    
  }


  ngOnInit() {
  }

}
