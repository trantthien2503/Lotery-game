/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameOneComponent } from './game-one.component';

describe('GameOneComponent', () => {
  let component: GameOneComponent;
  let fixture: ComponentFixture<GameOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
