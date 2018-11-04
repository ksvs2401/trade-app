import { TestBed, inject } from '@angular/core/testing';

import { HoldingService } from './holding.service';

describe('HoldingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoldingService]
    });
  });

  it('should be created', inject([HoldingService], (service: HoldingService) => {
    expect(service).toBeTruthy();
  }));
});
