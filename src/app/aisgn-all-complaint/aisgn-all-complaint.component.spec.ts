import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AisgnAllComplaintComponent } from './aisgn-all-complaint.component';

describe('AisgnAllComplaintComponent', () => {
  let component: AisgnAllComplaintComponent;
  let fixture: ComponentFixture<AisgnAllComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AisgnAllComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AisgnAllComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
