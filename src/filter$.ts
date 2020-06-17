import type {testFn} from './_types';

/**
 * Keeps entries which pass a test.
 * @param x an map (updated)
 * @param fn test function (v, k, x)
 * @returns x
 */
function filter$<T, U>(x: Map<T, U>, fn: testFn<T, U>): Map<T, U> {
  for(var [k, v] of x)
    if(!fn(v, k, x)) x.delete(k);
  return x;
}
export default filter$;
