import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { Banda } from './banda';



@Injectable({

  providedIn: 'root'

})

export class BandaService {

  listaBandasRef: AngularFireList<Banda>;

  bandaRef: AngularFireObject<Banda>;



  constructor(private db: AngularFireDatabase) {

    //inicialização dos caminhos ao firebase

    this.listaBandasRef = this.db.list('list-bandas');

    this.bandaRef = this.db.object('list-bandas/' + 0);

  }



  // Inserir Banda

  insertBanda (banda: Banda) {

    this.listaBandasRef.push({
      nome: banda.nome,

      estilo: banda.estilo,

      ano: banda.ano,
      $key: null
    });

  }



  getBandaById(id: string): AngularFireObject<Banda> {

    this.bandaRef = this.db.object('list-bandas/' + id);

    return this.bandaRef;

  }



  // Fetch Students List

  getBandaList(): AngularFireList<Banda> {

    return this.listaBandasRef;

  }



  // Update Student Object

  updateBanda(banda: Banda) {

    this.bandaRef.update({

      nome: banda.nome,

      estilo: banda.estilo,

      ano: banda.ano,

    });

  }



  // Delete Student Object

  deleteBanda(id: String) {

    this.bandaRef = this.db.object('list-bandas/' + id);

    this.bandaRef.remove();

  }

}

