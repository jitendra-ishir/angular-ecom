import { TestBed, inject } from '@angular/core/testing';

import { ContentPagesService } from './content-pages.service';

describe('ContentPagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentPagesService]
    });
  });

  it('should be created', inject([ContentPagesService], (service: ContentPagesService) => {
    expect(service).toBeTruthy();
  }));
});
