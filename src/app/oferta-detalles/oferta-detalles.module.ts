import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertaDetallesPageRoutingModule } from './oferta-detalles-routing.module';

import { OfertaDetallesPage } from './oferta-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaDetallesPageRoutingModule
  ],
  declarations: [OfertaDetallesPage]
})
export class OfertaDetallesPageModule {}
