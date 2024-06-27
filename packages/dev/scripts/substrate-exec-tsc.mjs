#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0

import { importDirect } from './util.mjs';

// typescript compiler load
await importDirect('tsc', 'typescript/lib/tsc.js');
