/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZfmService } from './zfm.service';

describe('Service: Zfm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZfmService]
    });
  });

  it('should ...', inject([ZfmService], (service: ZfmService) => {
    expect(service).toBeTruthy();
  }));
});