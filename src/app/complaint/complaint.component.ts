import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  template: `
    <h3>我要投诉</h3>
    <textarea
      [(ngModel)]="msg"
      rows="5"
      cols="15"
      placeholder="请输入..."></textarea>
    <div>
      <button (click)="cancel()">取消</button>
      <button (click)="confirm()">发送</button>
    </div>
  `,
  styles: []
})
export class ComplaintComponent implements OnInit {
  msg = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate([{outlets: { contact: null }}]);
  }

  confirm() {
    console.log(this.msg);
    this.cancel();
  }
}
