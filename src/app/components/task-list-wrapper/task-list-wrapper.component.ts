
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ArchiveTask, PinTask } from '../../state/task.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list-wrapper',
  template: `
      <app-task-list
        [tasks]="tasks$ | async"
        (onArchiveTask)="archiveTask($event)"
        (onPinTask)="pinTask($event)"
      ></app-task-list>
  `,
})
export class TaskListWrapperComponent {
  tasks$?: Observable<any>;

  constructor(private store: Store) {
    this.tasks$ = store.select((state) => state.taskbox.tasks);
    // setTimeout(() => {
    //   this.tasks$ = store.select((state) => state.taskbox.tasks);
    // }, 3000);
  }

  /**
   * Component method to trigger the archiveTask event
   */
  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  /**
   * Component method to trigger the pinTask event
   */
  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}