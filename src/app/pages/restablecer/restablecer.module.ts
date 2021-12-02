import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerPageRoutingModule } from './restablecer-routing.module';

import { RestablecerPage } from './restablecer.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerPageRoutingModule,
    MaterialModule,
  ],
  declarations: [RestablecerPage]
})
export class RestablecerPageModule {}
