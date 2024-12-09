import { Component, OnInit } from '@angular/core';
// import { KejadianService } from './kejadian.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  username = '';
  // password = '';
  fullname = '';

  ngOnInit(): void {
    this.username = localStorage.getItem('username') ?? '';
    this.fullname = localStorage.getItem('fullname') ?? '';
  }
  constructor() {
    this.username = localStorage.getItem('username') ?? '';
    this.fullname = localStorage.getItem('fullname') ?? '';
  }
}
