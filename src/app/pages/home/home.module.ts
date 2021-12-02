import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponenteUnoComponent } from 'src/app/components/componente-uno/componente-uno.component';
import { ComponenteDosComponent } from 'src/app/components/componente-dos/componente-dos.component';
import { ComponenteTresComponent } from 'src/app/components/componente-tres/componente-tres.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ComponenteTresComponent, ComponenteDosComponent, ComponenteUnoComponent]
})
export class HomePageModule {}
