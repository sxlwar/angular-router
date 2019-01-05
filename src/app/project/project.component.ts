import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  template: `
    <h3>这里是项目页面</h3>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ProjectComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
