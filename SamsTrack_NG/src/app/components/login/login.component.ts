import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: any = '';
  password: any = '';

  constructor(private loginService: LoginService,private router:Router) {}

  login() {
    //  call login service

    const loginRequest: any = {
      username: this.username,
      password: this.password,
    };

    this.loginService.login(loginRequest).subscribe((response) => {
      if(response!=null){
        this.router.navigate(['/home'])
      }else{
        alert('Invalid Credientials !')
        this.router.navigate(['/login'])
      }
    });
  }
}
