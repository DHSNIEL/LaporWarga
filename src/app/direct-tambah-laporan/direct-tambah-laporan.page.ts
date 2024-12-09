import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KejadianService } from '../kejadian.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direct-tambah-laporan',
  templateUrl: './direct-tambah-laporan.page.html',
  styleUrls: ['./direct-tambah-laporan.page.scss'],
})
export class DirectTambahLaporanPage {
  judul = '';
  deskripsi = '';
  gambar = '';
  tujuan = '';
  tanggal: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  pembuat = localStorage.getItem('username') ?? "";
  constructor(
    private kejadianService: KejadianService,
    private router: Router
  ) {}

  simpan() {
    this.kejadianService
      .KejadianTambah(
        this.judul,
        this.deskripsi,
        this.gambar,
        this.tujuan,
        this.tanggal,
        this.pembuat
      )
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('success');
          console.log("HTTP Response:", response);
        } else {
          alert(response.message);
        }
      }
      );

    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
