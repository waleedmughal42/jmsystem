import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

// import { Dashboard1Component } from './dashboard1/dashboard1.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: AdminComponent,
      },
    ]
  }
];
