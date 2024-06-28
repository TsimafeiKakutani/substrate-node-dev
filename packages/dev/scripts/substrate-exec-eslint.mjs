#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0

import { importRelative } from './util.mjs';

await importRelative('eslint', 'eslint/bin/eslint.js');
