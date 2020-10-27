import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './menubar/menubar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderComponent, MenubarComponent],
  exports :[HeaderComponent, MenubarComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
