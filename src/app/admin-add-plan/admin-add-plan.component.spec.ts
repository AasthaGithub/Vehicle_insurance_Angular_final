import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPlanComponent } from './admin-add-plan.component';

describe('AdminAddPlanComponent', () => {
  let component: AdminAddPlanComponent;
  let fixture: ComponentFixture<AdminAddPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
