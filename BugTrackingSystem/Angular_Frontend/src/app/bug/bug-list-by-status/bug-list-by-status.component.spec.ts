import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugListByStatusComponent } from './bug-list-by-status.component';

describe('BugListByStatusComponent', () => {
  let component: BugListByStatusComponent;
  let fixture: ComponentFixture<BugListByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugListByStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugListByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
