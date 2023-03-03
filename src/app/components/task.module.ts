
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './task/task.component';
import { TaskListWrapperComponent } from './task-list-wrapper/task-list-wrapper.component';
import { TasksState } from '../state/task.state';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListWrapperComponent],
  declarations: [TaskComponent, TaskListWrapperComponent, TaskListComponent],
  providers: [],
})
export class TaskModule {}