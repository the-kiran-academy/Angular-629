import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router:Router
  ) {}
  username: any;

  userProfile: any;

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.getUserProfile(this.username);
  }

  getUserProfile(username: any) {
    this.userService.getUserProfile(username).subscribe((response) => {
      this.userProfile = response;
      console.log(this.userProfile);
    });
  }

  updateUser() {
    this.userService.updateUser(this.userProfile).subscribe((response) => {
      alert('User updated Successfully :'+this.username)
      this.router.navigate(['/all-user']);

    });
  }
}
