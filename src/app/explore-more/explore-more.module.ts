import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreMorePageRoutingModule } from './explore-more-routing.module';

import { ExploreMorePage } from './explore-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreMorePageRoutingModule
  ],
  declarations: [ExploreMorePage]
})
export class ExploreMorePageModule {}
