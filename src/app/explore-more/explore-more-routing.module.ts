import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreMorePage } from './explore-more.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreMorePageRoutingModule {}
