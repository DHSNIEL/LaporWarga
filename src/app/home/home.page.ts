// home.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KejadianService } from '../kejadian.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  kejadians: any[] = [];

  fullname = localStorage.getItem('fullname')?? "";

  constructor(private router: Router, private kejadianService: KejadianService) {}

  ngOnInit() {
      this.kejadianService.KejadianList().subscribe(
        (data) => {
          this.kejadians = data;
        }
      );
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('fullname');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });;
  }

}
