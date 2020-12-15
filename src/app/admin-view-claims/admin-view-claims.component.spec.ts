import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewClaimsComponent } from './admin-view-claims.component';

describe('AdminViewClaimsComponent', () => {
  let component: AdminViewClaimsComponent;
  let fixture: ComponentFixture<AdminViewClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewClaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
