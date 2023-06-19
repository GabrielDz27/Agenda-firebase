import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

import { BandaService } from '../banda.service';



import { ToastrService } from 'ngx-toastr';



@Component({

  selector: 'app-add-banda',

  templateUrl: './add-banda.component.html',

  styleUrls: ['./add-banda.component.css']

})

export class AddBandaComponent implements OnInit{

  bandaForm: FormGroup;



  constructor(

    private bandaService: BandaService,

    private fb: FormBuilder,

    private toastr: ToastrService){

      this.bandaForm = this.createForm();

    }



    ngOnInit(){

      this.bandaService.getBandaList();

    }



    createForm(){

      return this.fb.group({

        nome: new FormControl('', Validators.required),

        ano: new FormControl('', Validators.required),

        estilo: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]+$')])

      });

    }



    resetForm(){

      this.bandaForm.reset();

    }



    submitForm(){

      this.bandaService.insertBanda(this.bandaForm.value);

      this.toastr.success(

        this.bandaForm.controls['nome'].value + " adicionado"

      );

    }



    get nome(){

      return this.bandaForm.get('nome');

    }



    get ano(){

      return this.bandaForm.get('ano');

    }



    get estilo(){

      return this.bandaForm.get('estilo');

    }

}





