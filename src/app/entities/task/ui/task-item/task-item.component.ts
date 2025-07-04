import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from '@/entities/task/model/task-store.types';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: false
})
export class TaskItemComponent {
  private _taskInformation?: TaskType;
  @Input()
  set taskInformation(value: TaskType | undefined) {
    this._taskInformation = value;
    this.taskStatus = value?.status || '';
  }
  get taskInformation(): TaskType | undefined {
    return this._taskInformation;
  }

  @Output() public changeTaskEmitter = new EventEmitter<TaskType>();

  @Output() public deleteTaskEmitter = new EventEmitter<number>();

  public taskStatus: string = this.taskInformation?.status || "notCompleted";

  public deleteTask(): void {
    this.deleteTaskEmitter.emit(this._taskInformation?.id);
  }

  public statusChange(newStatus: "notCompleted" | "inProcess" | "completed"): void {
    this.taskStatus = newStatus;
    console.log(newStatus)
    if (this.taskInformation) {
      this.changeTaskEmitter.emit({ ...this.taskInformation, status: newStatus })
    }
  }

}
