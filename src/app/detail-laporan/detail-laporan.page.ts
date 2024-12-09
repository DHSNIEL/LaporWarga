import { Component, OnInit } from '@angular/core';
import { KejadianService } from '../kejadian.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-laporan',
  templateUrl: './detail-laporan.page.html',
  styleUrls: ['./detail-laporan.page.scss'],
})
export class DetailLaporanPage implements OnInit {
  komentar = '';
  index = 0;
  kejadian: any = {};
  komentator = localStorage.getItem('username') ?? '';

  constructor(
    private kejadianService: KejadianService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.index = params['index'];
      this.kejadian = this.kejadianService
        .KejadianDetail(this.index)
        .subscribe((data) => {
          this.kejadian = data;
        });
    });
  }

  komentarLaporan() {
    this.kejadianService
      .KejadianKomentar(this.index, this.komentar, this.komentator)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('success');

          console.log('HTTP Response:', response);
        } else {
          alert(response.message);
        }
      });
      console.log("the index : ", this.index);
      window.location.reload();
  }
}
