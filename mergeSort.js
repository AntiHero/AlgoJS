/**
 * Merges to arrays
 * @param {number[]} a - 'left' part of array
 * @param {number[]} b - 'right' part of aray
 * @returns {number[]}
 */
function merge(a, b) {
  // create new array with length of a + b which filled by zeroes
  const c = Array.from({ length: a.length + b.length }, () => 0);

  let i = 0;
  let k = 0;
  let m = 0;

  // merge while one of the arrays won't be totally processed
  while (k < a.length && m < b.length) {
    // <= makes this sorting stable
    if (a[k] <= b[m]) {
      c[i] = a[k];
      k++;
    } else {
      c[i] = b[m];
      m++;
    }
    i++;
  }

  // one of the arrays still has numbers to be included in c array
  while (k < a.length) {
    c[i] = a[k];
    i++;
    k++;
  }

  while (m < b.length) {
    c[i] = b[m];
    i++;
    m++;
  }

  return c;
}

/**
 *
 * @param {number[]} a - array to sort
 * @returns {number[]}
 */
export default function mergeSort(a) {
  if (a.length <= 1) return a;

  const p = Math.floor(a.length / 2);

  const l = a.slice(0, p);
  const r = a.slice(p, a.length);

  return merge(mergeSort(l), mergeSort(r));
}
