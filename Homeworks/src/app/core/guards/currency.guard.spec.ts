import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginAuthService } from 'src/app/shared/services/login-auth.service';

import { CurrencyGuard } from './currency.guard';

describe('CurrencyGuard', () => {
  let guard: CurrencyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LoginAuthService],
    });
    guard = TestBed.inject(CurrencyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
