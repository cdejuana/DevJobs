import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    loadChildren: () => import('./bienvenida-inicio/bienvenida-inicio.module').then(m => m.BienvenidaInicioPageModule)
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
  },
  {
    path: 'textos-legales',
    loadChildren: () => import('./textos-legales/textos-legales.module').then( m => m.TextosLegalesPageModule)
<<<<<<< HEAD
  },  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'oferta-detalles',
    loadChildren: () => import('./oferta-detalles/oferta-detalles.module').then( m => m.OfertaDetallesPageModule)
  }

=======
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'bienvenida-inicio',
    loadChildren: () => import('./bienvenida-inicio/bienvenida-inicio.module').then( m => m.BienvenidaInicioPageModule)
  }

>>>>>>> f90dafa5eb737e2bbfe5ca266a8c68de7a832dec

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
