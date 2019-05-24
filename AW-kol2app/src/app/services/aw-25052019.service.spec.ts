import { TestBed } from '@angular/core/testing';

import { AW25052019Service } from './aw-25052019.service';

describe('AW25052019Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AW25052019Service = TestBed.get(AW25052019Service);
    expect(service).toBeTruthy();
  });
});
