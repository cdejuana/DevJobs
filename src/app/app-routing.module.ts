import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BuscadorResultadosPageModule } from './tab1/buscador-resultados/buscador-resultados.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: "tab1",
    children: [
      {
        path: "",
        loadChildren: () => import("./tab1/tab1.module").then( m => m.Tab1PageModule)
      },
      {
        path: "buscador-resultados",
        loadChildren: () => import("./tab1/buscador-resultados/buscador-resultados.module").then( m => m.BuscadorResultadosPageModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'textos-legales',
    loadChildren: () => import('./textos-legales/textos-legales.module').then( m => m.TextosLegalesPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
