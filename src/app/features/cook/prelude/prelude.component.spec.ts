import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreludeComponent } from './prelude.component';

describe('PreludeComponent', () => {
  let component: PreludeComponent;
  let fixture: ComponentFixture<PreludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreludeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
