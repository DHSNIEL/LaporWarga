import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KejadianService {
  kejadians = [];
  url = 'http://localhost/hmp/';
  constructor(private http: HttpClient) {}

  KejadianList(): Observable<any> {
    return this.http.get(this.url + 'kejadian.php');
  }

  KejadianDetail(id: number): Observable<any> {
    return this.http.get(this.url + 'kejadian_detail.php?id=' + id.toString());
  }

  KejadianSearch(search: string): Observable<any> {
    return this.http.get(
      this.url + 'kejadian_search.php?search=' + search.toString()
    );
  }

  KejadianTambah(
    judul: string,
    deskripsi: string,
    gambar: string,
    tujuan: string,
    tanggal: string,
    pembuat: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = new URLSearchParams();
    body.set('judul', judul);
    body.set('deskripsi', deskripsi);
    body.set('gambar', gambar);
    body.set('tujuan', tujuan);
    body.set('tanggal', tanggal);
    body.set('pembuat', pembuat);

    return this.http.post<any>(
      this.url + 'tambah_laporan.php',
      body.toString(),
      { headers }
    );
  }

  KejadianKomentar(id: number, komentar: string, komentator: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('idkejadian', id.toString());
    body.set('komentar', komentar);
    body.set('komentator', komentator);
    return this.http.post<any>(this.url + 'komentar.php', body.toString(), {
      headers
    });
  }

  PublishDraft(
    judul: string,
    deskripsi: string,
    gambar: string,
    tujuan: string,
    tanggal: string, 
    pembuat: string
  ): Observable<any>{
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const body = new URLSearchParams();
    body.set('judul', judul);
    body.set('deskripsi', deskripsi);
    body.set('gambar', gambar);
    body.set('tujuan_instansi', tujuan);
    body.set('tanggal', tanggal);
    body.set('pembuat', pembuat);
    return this.http.post<any>(this.url + 'draft_to_mysql.php', body.toString(), {headers});
  }

}
