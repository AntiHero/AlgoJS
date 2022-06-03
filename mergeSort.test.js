import mergeSort from './mergeSort';

test('should sort a random array', () => {
  const array = [5, 6, 10, 12, 5, 7, 8, 8, -3, 0, 2, 8, 22];
  const sortedArray = array.sort((a, b) => a - b);

  expect(mergeSort(array)).toStrictEqual(sortedArray);
});
