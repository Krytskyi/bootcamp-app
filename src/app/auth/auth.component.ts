import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'boot-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthService, 
    private router: Router
    ) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.user).subscribe((response) => {
      if(response)
        this.router.navigate(['']);
    });
  }
}
