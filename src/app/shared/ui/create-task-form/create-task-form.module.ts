import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskFormComponent } from './create-task-form.component';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';

@NgModule({
  declarations: [CreateTaskFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButton,
    MatError,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatFormField,
    MatInput,
    MatLabel
  ],
  exports: [CreateTaskFormComponent],
})
export class CreateTaskFormModule { }
