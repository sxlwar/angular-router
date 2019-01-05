import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <h3>用户登录后显示的控制台页面</h3>

    <div class="dashboard">
      <ul>
        <h4>左侧导航栏</h4>
        <li><a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">概览</a></li>
        <li><a routerLink="project" routerLinkActive="active">签约工程</a></li>
        <li><a routerLink="coder" routerLinkActive="active">签约工人</a></li>
      </ul>

      <div>
        <h4>右侧内容区域</h4>
        <router-outlet></router-outlet>
      </div>
    </div>

    <button (click)="logout()">退出</button>
  `,
  styles: [
    `
      .dashboard {
        display: flex;
      }

      .dashboard > div {
        margin-left: 50px;
      }

      ul {
        list-style: none;
        border: 1px solid #ccc;
        margin: 0;
        padding: 0;
      }

      li {
        display: flex;
        margin: 5px 0;
      }

      a {
        flex: 1 0 auto;
        text-align: center;
      }
    `
  ]
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
