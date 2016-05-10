/**
 * Created by steven on 16/5/10.
 */
'use strict';

import data from './mockData';
const LATENCY = 16;

export const getAllPanels = (cb) =>
  setTimeout(() => {
    cb(data)
  }, LATENCY);

