import { TestBed } from '@angular/core/testing';

import { APIClienteService } from './apicliente.service';

describe('APIClienteService', () => {
  let service: APIClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
