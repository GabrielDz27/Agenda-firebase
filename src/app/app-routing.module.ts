import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AddBandaComponent } from './banda/add-banda/add-banda.component';
import { ListBandaComponent } from './banda/list-banda/list-banda.component';
import { EditbandaComponent } from './banda/edit-banda/edit-banda.component';
const routes: Routes = [


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
