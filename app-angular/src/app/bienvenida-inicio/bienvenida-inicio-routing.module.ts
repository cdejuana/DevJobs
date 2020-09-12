import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaInicioPage } from './bienvenida-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidaInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidaInicioPageRoutingModule {}
