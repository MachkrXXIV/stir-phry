import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseEnPlaceComponent } from './mise-en-place.component';

describe('MiseEnPlaceComponent', () => {
  let component: MiseEnPlaceComponent;
  let fixture: ComponentFixture<MiseEnPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiseEnPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiseEnPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
