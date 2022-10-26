import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { GodownDetailsComponent } from './godowns/godown-details/godown-details.component';

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
			{
				path: 'admins',
				loadChildren: () => import('./admins/admin.module').then(m => m.AdminsModule)
			},
			{
				path: 'managers',
				loadChildren: () => import('./managers/managers.module').then(m => m.ManagersModule)
			},
			{
				path: 'godowns',
				loadChildren: () => import('./godowns/godown1.module').then(m => m.Godown1Module)
			}
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
		path: 'GodownDetailsComponent',
		component: GodownDetailsComponent
	}
];
