import fs from 'fs';
import path from 'path';
import { beforeEach, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';

let dom;

beforeEach(() => {
  const html = fs.readFileSync(path.resolve(__dirname, '../demo/index.html'), 'utf-8');
  dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });

  // Hacer global document y window
  global.window = dom.window;
  global.document = dom.window.document;
});

afterEach(() => {
  dom.window.close();
  global.window = undefined;
  global.document = undefined;
});
