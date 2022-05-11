import { TestBed } from '@angular/core/testing';

import { TopiclistService } from './topiclist.service';

describe('TopiclistService', () => {
  let service: TopiclistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopiclistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
