import { Component, OnInit } from '@angular/core';
import { KejadianService } from '../kejadian.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  kejadians: any[] = [];
  input: string = '';

  constructor(private kejadianeService: KejadianService) {}

  onSearchChange(event: any) {
    this.input = event.detail.value;
    if (this.input && this.input.trim() != '') {
      this.kejadianeService.KejadianSearch(this.input).subscribe((data) => {
        this.kejadians = data;
      });
    }else{
      this.kejadians = [];
    }
  }
}
