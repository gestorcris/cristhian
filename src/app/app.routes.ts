import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadComponent: () => import('./paginas/principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'vermas',
    loadComponent: () => import('./paginas/vermas/vermas.page').then( m => m.VermasPage)
  },  {
    path: 'cantidad',
    loadComponent: () => import('./paginas/cantidad/cantidad.page').then( m => m.CANTIDADPage)
  },
  {
    path: 'formas',
    loadComponent: () => import('./paginas/formas/formas.page').then( m => m.FORMASPage)
  },
  {
    path: 'precios',
    loadComponent: () => import('./paginas/precios/precios.page').then( m => m.PRECIOSPage)
  },
  {
    path: 'preguntas',
    loadComponent: () => import('./paginas/preguntas/preguntas.page').then( m => m.PreguntasPage)
  },

];
