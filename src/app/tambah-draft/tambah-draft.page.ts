import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { DraftService, IDraft } from '../draft.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambah-draft',
  templateUrl: './tambah-draft.page.html',
  styleUrls: ['./tambah-draft.page.scss'],
})
export class TambahDraftPage {
  judul = '';
  deskripsi = '';
  gambar = '';
  tujuan_instansi = '';
  tanggal: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  pembuat = localStorage.getItem('username') ?? '';

  constructor(private draftService: DraftService, private router: Router) {}

  async simpan() {
    const draft: IDraft = {
      judul: this.judul,
      deskripsi: this.deskripsi,
      gambar: this.gambar,
      tujuan_instansi: this.tujuan_instansi,
      tanggal: this.tanggal,
      pembuat: this.pembuat,
    };

    try {
      await this.draftService.saveDraft(draft);
      alert('Draft berhasil disimpan');
      this.router.navigate(['/draft']).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Error saving draft:', error);
      alert('Gagal menyimpan draft');
    }
  }
}
