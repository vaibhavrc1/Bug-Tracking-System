import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugUpdateSearchComponent } from './bug-update-search.component';

describe('BugUpdateSearchComponent', () => {
  let component: BugUpdateSearchComponent;
  let fixture: ComponentFixture<BugUpdateSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugUpdateSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugUpdateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
