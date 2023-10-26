import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaViajePageRoutingModule } from './pagina-viaje-routing.module';

import { PaginaViajePage } from './pagina-viaje.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaViajePageRoutingModule
  ],
  declarations: [PaginaViajePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginaViajePageModule {}
