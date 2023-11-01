import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameOneComponent } from './game-one/game-one.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

let component = [GameOneComponent]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: component,
  declarations: component
})
export class ComponentsModule { }
