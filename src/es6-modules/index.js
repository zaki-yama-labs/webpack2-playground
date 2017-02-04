import assert from 'assert';
import { currentPage, readPage } from './module1';

assert(currentPage === 0);
readPage();
assert(currentPage === 0);
