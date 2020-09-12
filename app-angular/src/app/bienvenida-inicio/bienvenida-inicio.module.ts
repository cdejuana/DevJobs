import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidaInicioPageRoutingModule } from './bienvenida-inicio-routing.module';

import { BienvenidaInicioPage } from './bienvenida-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidaInicioPageRoutingModule
  ],
  declarations: [BienvenidaInicioPage]
})
export class BienvenidaInicioPageModule {}
