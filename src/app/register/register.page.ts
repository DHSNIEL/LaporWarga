import { Component, OnInit } from '@angular/core';
import { KejadianService } from '../kejadian.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  fullname = '';
  username = '';
  password = '';
  foto_profil = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.fullname, this.username, this.password, this.foto_profil).subscribe((response: any)=>{

      if(response.result === "success"){
        alert("Success Registering Account");
      }else{
        alert(response.message);
      }
    });

    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

}
