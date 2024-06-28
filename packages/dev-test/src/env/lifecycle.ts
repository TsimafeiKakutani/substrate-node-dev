// Copyright 2024 @substrate-dev/dev-test Your Name

import { after, afterEach, before, beforeEach } from 'node:test';

/**
 * This ensures that the before/after functions are exposed
 **/
export function lifecycle () {
  return {
    after,
    afterAll: after,
    afterEach,
    before,
    beforeAll: before,
    beforeEach
  };
}
