import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovilesPage } from './moviles.page';

const routes: Routes = [
  {
    path: '',
    component: MovilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovilesPageRoutingModule {}
