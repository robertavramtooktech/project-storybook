
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inbox-screen-wrapper',
  template: `
    <app-inbox-screen [error]="error$ | async"></app-inbox-screen>
  `,
})
export class InboxScreenWrapperComponent {
  error$: Observable<boolean>;
  constructor(private store: Store) {
    this.error$ = store.select((state) => state.taskbox.error);
  }
}