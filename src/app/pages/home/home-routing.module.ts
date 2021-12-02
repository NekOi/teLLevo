import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteDosComponent } from 'src/app/components/componente-dos/componente-dos.component';
//import { ComponenteTresComponent } from 'src/app/components/componente-tres/componente-tres.component';
import { ComponenteUnoComponent}  from 'src/app/components/componente-uno/componente-uno.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: "uno",
        component: ComponenteUnoComponent
      },
      {
        path: "dos",
        component: ComponenteDosComponent
      },
      // {
      //   path: "tres",
      //   // component: ComponenteTresComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
