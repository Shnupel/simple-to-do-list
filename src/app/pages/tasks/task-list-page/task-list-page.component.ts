import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TaskStoreService } from '@/entities/task/model/task-store.service';
import { Observable } from 'rxjs';
import { TaskType } from '@/entities/task/model/task-store.types';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.scss'],
  standalone: false
})
export class TaskListPageComponent implements OnInit, OnDestroy {
  constructor(private taskStore: TaskStoreService) { }

  readonly panelOpenState = signal(false);
  public formModel = {
    title: "",
    description: "",
  }

  public tasks$?: Observable<TaskType[]>;

  public handleDeleteTask(id: number) {
    this.taskStore.deleteTask(id);
  }

  public handleChangeTask (task: TaskType) {
    this.taskStore.updateTask(task);
  }

  public formSubmit = (data: { title: string; description: string; }, isValid: boolean | null) => {
    if (!isValid) return;
    this.taskStore.addTask({
      id: Date.now(),
      title: data.title,
      description: data.description,
      status: "notCompleted"
    });

    this.panelOpenState.set(false);

    this.formModel = { title: "", description: "" };
  }

  ngOnInit(): void {
    this.tasks$ = this.taskStore.getAll();
  }

  ngOnDestroy(): void {

  }
}
