import { TestBed } from '@angular/core/testing';

import { ServiceMapaService } from './service-mapa.service';

describe('ServiceMapaService', () => {
  let service: ServiceMapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
