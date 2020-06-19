import { TestBed } from '@angular/core/testing';

import { CatalogueserviceService } from './catalogueservice.service';

describe('CatalogueserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogueserviceService = TestBed.get(CatalogueserviceService);
    expect(service).toBeTruthy();
  });
});
