import { Component, OnInit } from '@angular/core';
import { Coder, CoderService } from './coder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coder',
  template: `
    <h3>这里是程序员页面</h3>

    <ul>
      <li
      *ngFor="let item of coders"
      [routerLink]="item.id"
      [class.selected]="item.id ===selectedId"
      >{{ item.name }}</li>
    </ul>
  `,
  styles: [
    `
      li {
        cursor: pointer;
      }
      li:hover {
        background: rgba(0, 200, 50, 0.3);
        color: #fff;
      }
      .selected {
        border: 1px solid red;
      }
    `
  ]
})
export class CoderComponent implements OnInit {
  coders: Coder[];

  selectedId: number;

  constructor(private coderService: CoderService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.coders = this.coderService.getCoders();
    this.selectedId = +this.route.snapshot.paramMap.get('id');
  }
}
