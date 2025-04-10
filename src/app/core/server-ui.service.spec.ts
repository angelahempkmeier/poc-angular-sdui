import { TestBed } from '@angular/core/testing';

import { ServerUiService } from './server-ui.service';

describe('ServerUiService', () => {
  let service: ServerUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
