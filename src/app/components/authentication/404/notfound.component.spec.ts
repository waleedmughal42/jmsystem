import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cNotfoundComponent } from './notfound.component';

describe('cNotfoundComponent', () => {
  let component: cNotfoundComponent;
  let fixture: ComponentFixture<cNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cNotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(cNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
