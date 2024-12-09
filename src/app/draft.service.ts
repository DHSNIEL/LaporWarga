// draft.service.ts

import { Injectable } from '@angular/core';
import Dexie from 'dexie';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DraftService extends Dexie {
  drafts: Dexie.Table<IDraft, number>;

  constructor() {
    super('DraftDB');
    this.version(1).stores({
      drafts:
        '++id, judul, deskripsi, gambar, tujuan_instansi, tanggal, pembuat',
    });

    this.drafts = this.table('drafts');
  }

  async saveDraft(draft: IDraft): Promise<void> {
    await this.drafts.add(draft);
  }

  async deleteDraft(draftId: number): Promise<void> {
    await this.drafts.delete(draftId);
  }

  async getDrafts(): Promise<IDraft[]> {
    return this.drafts.toArray();
  }
}

export interface IDraft {
  id?: number;
  judul: string;
  deskripsi: string;
  gambar: string;
  tujuan_instansi: string;
  tanggal: string;
  pembuat: string;
}
