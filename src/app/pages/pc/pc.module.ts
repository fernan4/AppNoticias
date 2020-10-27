import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcPageRoutingModule } from './pc-routing.module';

import { PcPage } from './pc.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PcPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PcPage]
})
export class PcPageModule {}
