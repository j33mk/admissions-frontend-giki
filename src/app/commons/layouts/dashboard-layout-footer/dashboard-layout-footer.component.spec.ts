import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLayoutFooterComponent } from './dashboard-layout-footer.component';

describe('DashboardLayoutFooterComponent', () => {
  let component: DashboardLayoutFooterComponent;
  let fixture: ComponentFixture<DashboardLayoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLayoutFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
