import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Coder, CoderService } from './coder.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-coder',
  template: `
    <div *ngIf="(coder | async) as data">
      <h4>
        Id: <b>{{ data.id }}</b>
      </h4>
      <input type="text" [(ngModel)]="data.name" />
    </div>

    <button (click)="back()">Back</button>
  `,
  styles: []
})
export class CoderDetailComponent implements OnInit {
  coder: Observable<Coder>;

  constructor(private route: ActivatedRoute, private coderService: CoderService, private router: Router) {}

  ngOnInit(): void {
    this.coder = this.route.paramMap.pipe(map(params => this.coderService.getCoder(params.get('id'))));
  }

  back() {
    this.router.navigate(['/coder', { id: this.route.snapshot.paramMap.get('id')}]);
  }
}
