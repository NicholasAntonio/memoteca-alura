import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = []

  constructor(private PensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.PensamentoService.listar().subscribe((listaPensamentos => {
      this.listaPensamentos = listaPensamentos
    }));
  }

}
