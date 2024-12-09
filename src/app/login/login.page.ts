import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = "";
  password = "";
  hello = "";
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.hello = "";
  }

  login(){
    this.authService.login(this.username, this.password).subscribe(
      (res: any) => {
        if(res.result === "success"){
          // alert("login success");
          localStorage.setItem('username', this.username);
          localStorage.setItem('fullname', res.fullname);
          this.router.navigate(['/home'])
          .then(() => {
            window.location.reload();
          });
        }
        else{
          alert(res.message);
        }
      },
      (err) =>{
        alert("Login Failed");
        console.error(err);
      }
    );
  }

}
