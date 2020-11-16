import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(): any {
    this.router.navigateByUrl('/home');
  }

  gotoRegistrationPage(): any {
    this.router.navigateByUrl('/register');
  }
}
