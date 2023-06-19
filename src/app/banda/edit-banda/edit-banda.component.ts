
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { BandaService } from '../banda.service';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';



@Component({

  selector: 'app-edit-banda',

  templateUrl: './edit-banda.component.html',

  styleUrls: ['./edit-banda.component.css']

})

export class EditbandaComponent implements OnInit{

  bandaForm: FormGroup;



  constructor(

    private bandaService: BandaService,

    private fb: FormBuilder,

    private location: Location,

    private activeRoute: ActivatedRoute,

    private router: Router,

    private toastr: ToastrService

  ){

    this.bandaForm = this.createForm();

  }



  createForm(){

    return this.fb.group({

      nome: new FormControl('', Validators.required),

      ano: new FormControl('', Validators.required),

      estilo: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]+$')])

    });

  }



  ngOnInit(){

    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (id != null) {

      this.bandaService.getBandaById(id).valueChanges().subscribe(data => {

        this.bandaForm.setValue(data as any);

      });

    }

  }



  submitForm(){

    this.bandaService.updateBanda(this.bandaForm.value);

    this.toastr.success(

      this.bandaForm.controls['nome'].value + " atualizado."

    );

    this.router.navigate(['list-banda']);

  }

  goBack(){

    this.location.back();

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
