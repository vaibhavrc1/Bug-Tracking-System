import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpbugListComponent } from './empbug-list.component';

describe('EmpbugListComponent', () => {
  let component: EmpbugListComponent;
  let fixture: ComponentFixture<EmpbugListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpbugListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpbugListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
