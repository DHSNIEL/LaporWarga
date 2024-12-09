import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectTambahLaporanPage } from './direct-tambah-laporan.page';

const routes: Routes = [
  {
    path: '',
    component: DirectTambahLaporanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectTambahLaporanPageRoutingModule {}
