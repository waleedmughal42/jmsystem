import { Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
export const ManagerRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manager',
        component: ManagerComponent,
      },
    ]
  }
];