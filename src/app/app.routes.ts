import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TaskListPageComponent } from './pages/tasks/task-list-page/task-list-page.component';
import { TaskPageComponent } from './pages/tasks/task-page/task-page.component';

export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: TaskListPageComponent,
      },
      {
        path: "tasks",
        component: TaskListPageComponent,
      },
      {
        path: "tasks/:id",
        component: TaskPageComponent,
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/tasks",
  }
]
