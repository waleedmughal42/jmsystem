import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const Approutes: Routes = [
	{
		path: '',
		component: FullComponent,
		children: [
			{ path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
			},	
			// {
			// 	path: 'dashboard',
			// 	loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
			// },	
		]
	},
	{
		path: '',
		component: BlankComponent,
		children: [
			{
				path: 'authentication',
				loadChildren:
					() => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: '/authentication/404'
	},
	{
		path: 'admin',
		redirectTo: '/app/admins/admin',
	}
];
