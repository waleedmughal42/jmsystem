import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Godown1Component } from './godown1/godown1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Godown1Routes } from './godown1.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [Godown1Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(Godown1Routes)
  ]
})
export class Godown1Module { }


