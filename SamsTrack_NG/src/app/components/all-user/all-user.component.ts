import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
})
export class AllUserComponent implements OnInit {

  userList: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.allUser();
  }

  allUser() {
    this.userService.allUser().subscribe((response) => {
      this.userList = response;
    });
  }

  deleteUser(username: any) {
    this.userService.deleteUser(username).subscribe((response) => {
      alert(response);
      this.allUser();
    });
  }

}
