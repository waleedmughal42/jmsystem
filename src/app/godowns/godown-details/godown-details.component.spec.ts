import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodownDetailsComponent } from './godown-details.component';

describe('GodownDetailsComponent', () => {
  let component: GodownDetailsComponent;
  let fixture: ComponentFixture<GodownDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodownDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodownDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
