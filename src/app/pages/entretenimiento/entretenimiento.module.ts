import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntretenimientoPageRoutingModule } from './entretenimiento-routing.module';

import { EntretenimientoPage } from './entretenimiento.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntretenimientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EntretenimientoPage]
})
export class EntretenimientoPageModule {}
