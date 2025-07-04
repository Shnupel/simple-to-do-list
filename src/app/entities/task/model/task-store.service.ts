import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import type { TaskType } from './task-store.types';

const mockTasks: TaskType[] = [{ id: 0, title: "Подготовить презентацию по проекту", description: "Создать слайды с основными результатами и планами на будущее", status: "notCompleted" }, { id: 1, title: "Написать отчет по текущей задаче", description: "Описать проделанную работу, проблемы и решения", status: "inProcess" }, { id: 2, title: "Провести встречу с командой", description: "Обсудить текущие задачи и распределить роли", status: "completed" }, { id: 3, title: "Изучить новую технологию", description: "Прочитать документацию и попробовать написать тестовый код", status: "notCompleted" }, { id: 5, title: "Ответить на письма клиентов", status: "inProcess" }, { id: 6, title: "Закрыть баги в системе", description: "Исправить ошибки, выявленные при тестировании", status: "completed" }, { id: 7, title: "Составить план на следующий спринт", description: "Определить приоритеты и расставить дедлайны", status: "notCompleted" }, { id: 8, title: "Проверить качество кода", description: "Провести ревью и предложить улучшения", status: "inProcess" }, { id: 9, title: "Обновить документацию", description: "Добавить новые разделы и исправить устаревшие данные", status: "completed" }, { id: 10, title: "Настроить CI/CD pipeline", description: "Автоматизировать сборку и деплой проекта", status: "notCompleted" } ];

@Injectable({
  providedIn: 'root'
})
export class TaskStoreService {
  private readonly _tasks$ = new BehaviorSubject<TaskType[]>([]);

  public readonly tasks$: Observable<TaskType[]> = this._tasks$.asObservable();

  constructor() {
    this._tasks$.next(mockTasks);
  }

  public getAll(): Observable<TaskType[]> {
    return this.tasks$;
  }

  public getById(_id: number): Observable<TaskType | undefined> {
    return this.tasks$.pipe(
      map(tasks => tasks.find((task) => task.id === _id))
    );
  }

  public addTask(task: TaskType): void {
    const current = this._tasks$.getValue();
    this._tasks$.next([task, ...current]);
  }

  public updateTask(updatedTask: TaskType): void {
    const currentTasks = this._tasks$.getValue();

    const updatedTasks = currentTasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );

    this._tasks$.next(updatedTasks);
  }


  public deleteTask(_id: number): void {
    const filtered = this._tasks$.getValue().filter(task => task.id !== _id);
    this._tasks$.next(filtered);
  }
}
