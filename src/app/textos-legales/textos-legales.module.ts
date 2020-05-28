import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextosLegalesPageRoutingModule } from './textos-legales-routing.module';

import { TextosLegalesPage } from './textos-legales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextosLegalesPageRoutingModule
  ],
  declarations: [TextosLegalesPage]
})
export class TextosLegalesPageModule {}
