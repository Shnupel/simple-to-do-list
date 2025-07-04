import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListPageComponent } from './task-list-page.component';
import { TaskItemModule } from '@/entities/task/ui/task-item/task-item.module';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButton } from '@angular/material/button';
import { CreateTaskFormModule } from '@/shared/ui/create-task-form/create-task-form.module';

@NgModule({
  declarations: [TaskListPageComponent],
  imports: [
    CommonModule,
    TaskItemModule,
    MatListModule,
    MatExpansionModule,
    MatButton,
    CreateTaskFormModule,
  ],
  exports: [TaskListPageComponent]
})
export class TaskListPageModule { }
