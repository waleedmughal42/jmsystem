import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Godown1Component } from './godown1.component';

describe('Godown1Component', () => {
  let component: Godown1Component;
  let fixture: ComponentFixture<Godown1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Godown1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Godown1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
