import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComponenteDosComponent } from './components/componente-dos/componente-dos.component';
import { ComponenteTresComponent } from './components/componente-tres/componente-tres.component';
import { ComponenteUnoComponent } from './components/componente-uno/componente-uno.component';
// import { ComponenteTresComponent } from './components/componente-tres/componente-tres.component';
import { AuthGuardService } from "./services/auth-guard.service";


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then(m => m.HomePageModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'evaluar',
    loadChildren: () => import('./Pages/evaluar/evaluar.module').then(m => m.EvaluarPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./Pages/restablecer/restablecer.module').then(m => m.RestablecerPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./Pages/not-found/not-found.module').then(m => m.NotFoundPageModule)
  },
  {
    path: 'componente-dos', component: ComponenteDosComponent
  },
  {
    path: 'componente-uno', component: ComponenteUnoComponent
  },
  // {
  //   path:'componente-tres', component: ComponenteTresComponent
  // },  






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
