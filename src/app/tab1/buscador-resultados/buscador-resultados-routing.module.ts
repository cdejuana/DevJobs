import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscadorResultadosPage } from './buscador-resultados.page';

const routes: Routes = [
  {
    path: '',
    component: BuscadorResultadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscadorResultadosPageRoutingModule {}
