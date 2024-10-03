import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:any='';
  password:any='';

  login(){
    alert(this.username +' '+this.password);
  }

}
