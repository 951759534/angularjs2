/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PubService } from './pub.service';

describe('PubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PubService]
    });
  });

  it('should ...', inject([PubService], (service: PubService) => {
    expect(service).toBeTruthy();
  }));
});
