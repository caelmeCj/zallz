/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LookComponent } from './Look.component';

describe('LookComponent', () => {
  let component: LookComponent;
  let fixture: ComponentFixture<LookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
