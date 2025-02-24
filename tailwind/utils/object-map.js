/**
 * Maps the provided object with the given function.
 *
 * @param obj: any
 * @param fn: (value: any, key: string) => any)
 */
const map = (obj, fn) => {
  return Object.keys(obj).map((key) => fn(obj[key], key));
};

module.exports = { map };
