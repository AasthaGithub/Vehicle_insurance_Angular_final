import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatePremiumComponent } from './estimate-premium.component';

describe('EstimatePremiumComponent', () => {
  let component: EstimatePremiumComponent;
  let fixture: ComponentFixture<EstimatePremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatePremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatePremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
