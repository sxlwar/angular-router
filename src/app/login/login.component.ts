import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <h3>登录页面</h3>
    <button (click)="toggleLogin()">{{ authService.getAuthState() ? '退出' : '登录' }}</button>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  toggleLogin() {
    if (this.authService.getAuthState()) {
      this.authService.logout();
    } else {
      this.authService.login();
    }
  }
}
