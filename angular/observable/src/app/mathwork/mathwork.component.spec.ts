import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathworkComponent } from './mathwork.component';

describe('MathworkComponent', () => {
  let component: MathworkComponent;
  let fixture: ComponentFixture<MathworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
