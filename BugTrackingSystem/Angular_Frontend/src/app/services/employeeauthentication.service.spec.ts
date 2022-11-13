import { TestBed } from '@angular/core/testing';

import { EmployeeauthenticationService } from './employeeauthentication.service';

describe('EmployeeauthenticationService', () => {
  let service: EmployeeauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
