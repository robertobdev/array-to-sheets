import { TestBed } from '@angular/core/testing';

import { ArrayToFileSheetsService } from './array-to-file-sheets.service';

describe('ArrayToFileSheetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrayToFileSheetsService = TestBed.get(ArrayToFileSheetsService);
    expect(service).toBeTruthy();
  });
});
