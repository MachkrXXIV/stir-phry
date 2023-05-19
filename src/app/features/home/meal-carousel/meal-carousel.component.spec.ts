import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCarouselComponent } from './meal-carousel.component';

describe('MealCarouselComponent', () => {
  let component: MealCarouselComponent;
  let fixture: ComponentFixture<MealCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MealCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
