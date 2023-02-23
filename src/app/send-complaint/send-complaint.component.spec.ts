import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendComplaintComponent } from './send-complaint.component';

describe('SendComplaintComponent', () => {
  let component: SendComplaintComponent;
  let fixture: ComponentFixture<SendComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
