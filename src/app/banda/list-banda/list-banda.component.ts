import { Component, OnInit } from '@angular/core';

import { BandaService } from '../banda.service';

import { ToastrService } from 'ngx-toastr';

import { Banda } from '../banda';



@Component({

  selector: 'app-list-banda',

  templateUrl: './list-banda.component.html',

  styleUrls: ['./list-banda.component.css'],

})

export class ListBandaComponent implements OnInit {

  page = 1;

  listaBandas: Banda[] = [];

  listaVazia: Boolean = true;

  mostrarLoader: Boolean = true;



  constructor(

    private bandaService: BandaService,

    private toastr: ToastrService

  ) {}



  ngOnInit() {

    let fetchData = this.bandaService.getBandaList();

    fetchData.snapshotChanges().subscribe((data) => {

      this.listaBandas = [];

      if (data.length <= 0) {

        this.listaVazia = true;

      } else {

        this.listaVazia = false;

        data.forEach((item: any) => {

          let banda = item.payload.toJSON();

          banda['$key'] = item.key;

          this.listaBandas.push(banda as Banda);

        });

      }

      this.mostrarLoader = false;

    });

  }



  deleteBanda(banda: Banda) {

    if (window.confirm('Tem certeza que deseja remover o banda?')) {

      if (banda.$key != null) {

        this.bandaService.deleteBanda(banda.$key);

        this.toastr.success(banda.nome + ' removido com sucesso.');

      }

    }

  }

}


