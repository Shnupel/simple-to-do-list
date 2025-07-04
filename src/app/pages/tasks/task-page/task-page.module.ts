import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './task-page.component';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [TaskPageComponent, TaskPageComponent],
  imports: [
    CommonModule,
    RouterLink,
    MatButton
  ],
  exports: [TaskPageComponent],
})
export class TaskPageModule { }
