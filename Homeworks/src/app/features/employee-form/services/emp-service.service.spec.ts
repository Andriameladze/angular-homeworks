import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmpServiceService } from './emp-service.service';

describe('EmpServiceService', () => {
  let service: EmpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(EmpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
