import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  constructor() { }

  exibirTexto: boolean = false;
  textoBotao: String = "Exibir"
  textoBotao2: String = "Esconder Tabela"
  esconderTabela:boolean = true;

  herois = [
    {
      "id": 1,
      "nome": "Batman",
      "universo": "DC"
    },

    {
      "id": 2,
      "nome": "Superman",
      "universo": "DC"
    },

    {
      "id": 3,
      "nome": "Mulher Maravilha",
      "universo": "DC"
    },

    {
      "id": 4,
      "nome": "Home de Ferro",
      "universo": "Marvel"
    },

    {
      "id": 5,
      "nome": "Batman",
      "universo": "Marvel"
    },

    {
      "id": 6,
      "nome": "Capitão América",
      "universo": "Marvel"
    },

    {
      "id": 7,
      "nome": "Homem Formiga",
      "universo": "Marvel"
    }
  ]

  ngOnInit(): void {
  }

  mostrarOcultar(){
    if (this.exibirTexto == true)
    {
      this.exibirTexto = false;
      this.textoBotao = "Exibir"
    }
    else
    {
      this.exibirTexto = true;
      this.textoBotao = "Ocultar"
    }
    
    // this.exibirTexto=!this.exibirTexto
  }
  exibirTabela(){
    if (this.esconderTabela == true) {
      this.esconderTabela = false;
      this.textoBotao2 = "Abrir Tabela"
    }
    else {
      this.esconderTabela = true;
      this.textoBotao2 = "Esconder Tabela"
    }

    // this.esconderTabela = !this.esconderTabela;
  }
}
