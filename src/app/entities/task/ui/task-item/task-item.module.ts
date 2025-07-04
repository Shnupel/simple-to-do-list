import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [TaskItemComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInput,
    MatButtonModule,
    FormsModule,
    RouterLink,
  ],
  exports: [TaskItemComponent]
})
export class TaskItemModule { }
