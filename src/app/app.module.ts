import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';



import { environment } from '../environment';



import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';



import { AddContatoComponent } from './contato/add-contato/add-contato.component';

import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';

import { ListContatoComponent } from './contato/list-contato/list-contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxPaginationModule } from 'ngx-pagination';
import { ListBandaComponent } from './banda/list-banda/list-banda.component';
import { EditbandaComponent } from './banda/edit-banda/edit-banda.component';
import { AddBandaComponent } from './banda/add-banda/add-banda.component';



@NgModule({

  declarations: [

    AppComponent,

    AddContatoComponent,

    EditContatoComponent,

    ListContatoComponent,

      ListBandaComponent,
      EditbandaComponent,
      AddBandaComponent,
      ListBandaComponent

  ],

  imports: [

    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFireDatabaseModule,

    AppRoutingModule,

    FormsModule,

    ReactiveFormsModule,

    BrowserAnimationsModule,

    ToastrModule.forRoot(),

    NgxPaginationModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }

