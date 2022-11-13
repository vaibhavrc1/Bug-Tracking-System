import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElogoutComponent } from './elogout.component';

describe('ElogoutComponent', () => {
  let component: ElogoutComponent;
  let fixture: ComponentFixture<ElogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
