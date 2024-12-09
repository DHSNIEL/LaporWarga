import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tambah-draft',
    loadChildren: () => import('./tambah-draft/tambah-draft.module').then( m => m.TambahDraftPageModule)
  },
  {
    path: 'draft',
    loadChildren: () => import('./draft/draft.module').then( m => m.DraftPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'detail-laporan/:index',
    loadChildren: () => import('./detail-laporan/detail-laporan.module').then( m => m.DetailLaporanPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tambah-draft',
    loadChildren: () => import('./tambah-draft/tambah-draft.module').then( m => m.TambahDraftPageModule)
  },
  {
    path: 'direct-tambah-laporan',
    loadChildren: () => import('./direct-tambah-laporan/direct-tambah-laporan.module').then( m => m.DirectTambahLaporanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
