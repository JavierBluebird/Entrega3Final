import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalpagPage } from './modalpag.page';

const routes: Routes = [
  {
    path: '',
    component: ModalpagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalpagPageRoutingModule {}
