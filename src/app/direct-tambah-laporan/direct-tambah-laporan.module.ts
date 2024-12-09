import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectTambahLaporanPageRoutingModule } from './direct-tambah-laporan-routing.module';

import { DirectTambahLaporanPage } from './direct-tambah-laporan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectTambahLaporanPageRoutingModule
  ],
  declarations: [DirectTambahLaporanPage]
})
export class DirectTambahLaporanPageModule {}
