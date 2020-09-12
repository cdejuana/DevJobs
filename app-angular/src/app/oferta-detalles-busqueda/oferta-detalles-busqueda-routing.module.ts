import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertaDetallesBusquedaPage } from './oferta-detalles-busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: OfertaDetallesBusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertaDetallesBusquedaPageRoutingModule {}
