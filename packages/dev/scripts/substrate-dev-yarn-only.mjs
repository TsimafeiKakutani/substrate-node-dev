#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0

import process from 'node:process';

import { exitFatalYarn } from './util.mjs';

exitFatalYarn();

process.exit(0);
