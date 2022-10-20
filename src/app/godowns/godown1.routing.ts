import { Routes } from '@angular/router';
import { Godown1Component } from './godown1/godown1.component';
export const Godown1Routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'godown1',
        component: Godown1Component,
      },
    ]
  }
];