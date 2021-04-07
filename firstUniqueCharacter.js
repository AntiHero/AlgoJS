/**
 * Finds the first unique character in a string.
 * @param { string } str - given string.
 * @returns { number } - index of first unique character or -1 if not found.
 */
export function getFirstUniqueChar1(str) {
  const hash = {};
  let lastIndex = -1;

  [...str].forEach((char) => {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  });

  const entries = Object.entries(hash);

  entries.every(([key, value]) => {
    if (value === 1) {
      lastIndex = str.indexOf(key);
      return false;
    }

    return true;
  });

  return lastIndex;
}

/**
 * Finds the first unique character in a string.
 * @param { string } str - given string.
 * @returns { number } - index of first unique character or -1 if not found.
 */
export function getFirstUniqueChar2(str) {
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return str.indexOf(char);
    }
  }

  return -1;
}
