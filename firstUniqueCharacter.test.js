import { getFirstUniqueChar1, getFirstUniqueChar2 } from './firstUniqueCharacter';

test('index of first unique character', () => {
  let index1 = getFirstUniqueChar1('aabcdd');
  let index2 = getFirstUniqueChar2('aabcdd');

  expect(index1).toBe(2);
  expect(index2).toBe(2);

  index1 = getFirstUniqueChar1('radar');
  index2 = getFirstUniqueChar2('radar');

  expect(index1).toBe(2);
  expect(index2).toBe(2);

  index1 = getFirstUniqueChar1('hackerrank');
  index2 = getFirstUniqueChar2('hackerrank');

  expect(index1).toBe(0);
  expect(index2).toBe(0);

  const epicStr = 'aabbccddeeggffmmnnyyzzS';

  index1 = getFirstUniqueChar1(epicStr);
  index2 = getFirstUniqueChar2(epicStr);

  expect(index1).toBe(epicStr.length - 1);
  expect(index2).toBe(epicStr.length - 1);
});

test('-1 if no unique characters found', () => {
  const index1 = getFirstUniqueChar1('aabbccdd');
  const index2 = getFirstUniqueChar2('aabbccdd');

  expect(index1).toBe(-1);
  expect(index2).toBe(-1);
});
