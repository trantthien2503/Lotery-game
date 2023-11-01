import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameOneComponent } from './game-one/game-one.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { GameTwoComponent } from './game-two/game-two.component';

let component = [GameOneComponent, GameTwoComponent]

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
