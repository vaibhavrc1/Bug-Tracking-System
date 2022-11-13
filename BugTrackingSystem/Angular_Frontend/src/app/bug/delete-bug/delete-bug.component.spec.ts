import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBugComponent } from './delete-bug.component';

describe('DeleteBugComponent', () => {
  let component: DeleteBugComponent;
  let fixture: ComponentFixture<DeleteBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
