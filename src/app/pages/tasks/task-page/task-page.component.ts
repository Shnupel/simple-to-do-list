import { Component, OnInit } from '@angular/core';
import { TaskStoreService } from '@/entities/task/model/task-store.service';
import { TaskType } from '@/entities/task/model/task-store.types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
  standalone: false
})
export class TaskPageComponent implements OnInit{
  constructor(
    private taskStore: TaskStoreService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) {}

  public task! : TaskType;

  ngOnInit(): void {
    const taskId = Number(this.activatedRouter.snapshot.params['id']);
    this.taskStore.getById(taskId).subscribe(_task => {
      if (_task) {
        this.task = _task;
      } else {
        alert(`Задача с id=${taskId} не найдена`);
        this.router.navigate(['/tasks']);
      }
    })
  }
}
