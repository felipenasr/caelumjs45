import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { routing } from "./app.routes";
import { FotoService } from "./foto/foto.service";


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    PainelModule,
    routing,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})

export class AppModule {}