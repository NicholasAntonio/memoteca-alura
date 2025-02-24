import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }
  constructor(private pensamentoService : PensamentoService, private router : Router) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.pensamentoService.criar(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
