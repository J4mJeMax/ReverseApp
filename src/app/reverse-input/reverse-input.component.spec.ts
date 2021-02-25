import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseInputComponent } from './reverse-input.component';

describe('ReverseInputComponent', () => {
  let component: ReverseInputComponent;
  let fixture: ComponentFixture<ReverseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
