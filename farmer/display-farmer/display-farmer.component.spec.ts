import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFarmerComponent } from './display-farmer.component';

describe('DisplayFarmerComponent', () => {
  let component: DisplayFarmerComponent;
  let fixture: ComponentFixture<DisplayFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFarmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
