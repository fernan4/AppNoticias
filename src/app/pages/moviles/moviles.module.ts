import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovilesPageRoutingModule } from './moviles-routing.module';

import { MovilesPage } from './moviles.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovilesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MovilesPage]
})
export class MovilesPageModule {}
