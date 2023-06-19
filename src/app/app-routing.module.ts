import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AddContatoComponent } from './contato/add-contato/add-contato.component';
import { ListContatoComponent } from './contato/list-contato/list-contato.component';
import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';
import { AddBandaComponent } from './banda/add-banda/add-banda.component';
import { ListBandaComponent } from './banda/list-banda/list-banda.component';
import { EditbandaComponent } from './banda/edit-banda/edit-banda.component';
const routes: Routes = [
  { path: '', redirectTo: '/list-contato', pathMatch: 'full' },
  { path: 'add-contato', component: AddContatoComponent },
  { path: 'list-contato', component: ListContatoComponent },
  { path: 'edit-contato/:id', component: EditContatoComponent },

  { path: '', redirectTo: '/list-banda', pathMatch: 'full' },
  { path: 'add-banda', component: AddBandaComponent },
  { path: 'list-banda', component: ListBandaComponent },
  { path: 'edit-banda/:id', component: EditbandaComponent }
];

@NgModule({

  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
