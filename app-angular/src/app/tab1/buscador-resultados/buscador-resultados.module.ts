import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorResultadosPageRoutingModule } from './buscador-resultados-routing.module';

import { BuscadorResultadosPage } from './buscador-resultados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscadorResultadosPageRoutingModule
  ],
  declarations: [BuscadorResultadosPage]
})
export class BuscadorResultadosPageModule {}
