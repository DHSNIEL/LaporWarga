// draft.page.ts

import { Component, OnInit } from '@angular/core';
import { DraftService, IDraft } from '../draft.service';
import { Router } from '@angular/router';
import { KejadianService } from '../kejadian.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.page.html',
  styleUrls: ['./draft.page.scss'],
})
export class DraftPage implements OnInit {
  drafts: IDraft[] = [];

  constructor(
    private draftService: DraftService,
    private router: Router,
    private kejadianService: KejadianService
  ) {}

  async ngOnInit() {
    await this.loadDrafts();
  }

  async loadDrafts() {
    try {
      this.drafts = await this.draftService.getDrafts();
    } catch (error) {
      console.error('Error loading drafts:', error);
      alert('Gagal memuat draft');
    }
  }

  async publishDraft(draft: IDraft) {
    try {
      await this.kejadianService
        .PublishDraft(
          draft.judul,
          draft.deskripsi,
          draft.gambar,
          draft.tujuan_instansi,
          draft.tanggal,
          draft.pembuat
        )
        .toPromise();

      await this.draftService.deleteDraft(draft.id!);
      alert('Draft berhasil dipublish');
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Error publishing draft:', error);
      alert('Gagal mempublish draft');
    }
  }
}
