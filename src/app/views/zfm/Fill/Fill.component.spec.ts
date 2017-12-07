/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FillComponent } from './Fill.component';

describe('FillComponent', () => {
  let component: FillComponent;
  let fixture: ComponentFixture<FillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
