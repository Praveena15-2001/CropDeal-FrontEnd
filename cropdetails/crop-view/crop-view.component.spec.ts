import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropViewComponent } from './crop-view.component';

describe('CropViewComponent', () => {
  let component: CropViewComponent;
  let fixture: ComponentFixture<CropViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
