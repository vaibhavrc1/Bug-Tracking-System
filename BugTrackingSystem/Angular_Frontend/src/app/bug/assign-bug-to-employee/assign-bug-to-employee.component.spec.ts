import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBugToEmployeeComponent } from './assign-bug-to-employee.component';

describe('AssignBugToEmployeeComponent', () => {
  let component: AssignBugToEmployeeComponent;
  let fixture: ComponentFixture<AssignBugToEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignBugToEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBugToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
