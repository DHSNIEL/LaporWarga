import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost/hmp/';

  constructor(private router: Router, private http: HttpClient) {}

  // region login
  isLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();

    body.set('username', username);
    body.set('password', password);

    const urlencodedData = body.toString();

    return this.http.post(this.url + 'login.php', urlencodedData, { headers });
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('fullname');
    this.router.navigate(['/login']);
  }

  checkLogin() {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
  // endregion

  // region register
  register(
    fullname: string,
    username: string,
    password: string,
    foto_profil: string
  ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('fullname', fullname);
    body.set('username', username);
    body.set('password', password);
    body.set('foto_profil', foto_profil);
    const urlencodedData = body.toString();
    return this.http.post(this.url + 'register.php', urlencodedData, { headers });
  }

  // endregion
}
