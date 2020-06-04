import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertaDetallesBusquedaPageRoutingModule } from './oferta-detalles-busqueda-routing.module';

import { OfertaDetallesBusquedaPage } from './oferta-detalles-busqueda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaDetallesBusquedaPageRoutingModule
  ],
  declarations: [OfertaDetallesBusquedaPage]
})
export class OfertaDetallesBusquedaPageModule {}
