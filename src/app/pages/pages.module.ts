import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ComponentsModule } from './components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
