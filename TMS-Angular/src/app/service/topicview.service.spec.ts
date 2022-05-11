import { TestBed } from '@angular/core/testing';

import { TopicviewService } from './topicview.service';

describe('TopicviewService', () => {
  let service: TopicviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
