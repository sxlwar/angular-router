import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      overview works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
