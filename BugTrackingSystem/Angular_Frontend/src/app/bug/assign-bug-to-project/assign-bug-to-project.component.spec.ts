import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBugToProjectComponent } from './assign-bug-to-project.component';

describe('AssignBugToProjectComponent', () => {
  let component: AssignBugToProjectComponent;
  let fixture: ComponentFixture<AssignBugToProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignBugToProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBugToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
