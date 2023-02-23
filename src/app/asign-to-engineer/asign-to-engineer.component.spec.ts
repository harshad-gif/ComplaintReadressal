import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignToEngineerComponent } from './asign-to-engineer.component';

describe('AsignToEngineerComponent', () => {
  let component: AsignToEngineerComponent;
  let fixture: ComponentFixture<AsignToEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignToEngineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignToEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
