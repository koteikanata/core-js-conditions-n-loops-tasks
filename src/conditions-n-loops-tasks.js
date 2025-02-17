/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (
    a > 0 &&
    b > 0 &&
    c > 0 &&
    (a === b || b === c || a === c) &&
    a + b > c &&
    b + c > a &&
    a + c > b
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';

  const units = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const tens = ['X', 'XX', 'XXX'];

  if (num >= 10) {
    result += tens[Math.floor(num / 10) - 1];
  }
  if (num % 10 !== 0) {
    result += units[(num % 10) - 1];
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const digit = numberStr[i];

    switch (digit) {
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      case '.':
      case ',':
        res += 'point';
        break;
      case '-':
        res += 'minus';
        break;
      default:
    }
    if (i < numberStr.length - 1) res += ' ';
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let resversed = '';

  for (let i = str.length - 1; i > -1; i -= 1) {
    resversed += str[i];
  }
  return str === resversed;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let currentDigit;
  let curNum = num;

  while (curNum > 0) {
    currentDigit = curNum % 10;

    if (currentDigit === digit) {
      return true;
    }

    curNum = Math.floor(curNum / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const sums = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
    sums[i] = sum;
  }

  const sumsRev = [];
  let index = 0;
  sum = 0;
  for (let i = arr.length - 1; i > -1; i -= 1) {
    sum += arr[i];
    sumsRev[index] = sum;
    index += 1;
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (sums[i] - arr[i] === sumsRev[arr.length - i - 1] - arr[i]) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  const max = size * size;
  let level = 0;
  let counter = 1;
  let row = 0;
  let col = 0;

  while (counter <= max) {
    if (level > 0) col += 1;
    while (col < size - level) {
      if (counter > max) break;
      matrix[row][col] = counter;
      counter += 1;
      col += 1;
    }
    col -= 1;
    row += 1;

    while (row < size - level) {
      if (counter > max) break;
      matrix[row][col] = counter;
      counter += 1;
      row += 1;
    }
    row -= 1;
    col -= 1;

    while (col >= level) {
      if (counter > max) break;
      matrix[row][col] = counter;
      counter += 1;
      col -= 1;
    }
    col += 1;
    row -= 1;

    while (row > level) {
      if (counter > max) break;
      matrix[row][col] = counter;
      counter += 1;
      row -= 1;
    }
    row += 1;
    level += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const m = matrix;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const temp = matrix[i][j];
      m[i][j] = matrix[j][i];
      m[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < Math.floor(n / 2); j += 1) {
      const temp = matrix[i][j];
      m[i][j] = matrix[i][n - 1 - j];
      m[i][n - 1 - j] = temp;
    }
  }

  return m;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function heapify(inner, n, i) {
    const copy = inner;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < n && inner[left] > inner[largest]) largest = left;
    if (right < n && inner[right] > inner[largest]) largest = right;

    if (largest !== i) {
      [copy[i], copy[largest]] = [inner[largest], inner[i]];
      return heapify(inner, n, largest);
    }
    return inner;
  }

  let copy = arr;
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i -= 1) {
    copy = heapify(arr, arr.length, i);
  }

  for (let i = arr.length - 1; i > 0; i -= 1) {
    [copy[0], copy[i]] = [arr[i], arr[0]];
    copy = heapify(arr, i, 0);
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(inputStr, inputIterations) {
  let str = inputStr;
  let iterations = inputIterations;
  const len = str.length;

  function findCycleLength() {
    const initialStr = str;
    let count = 0;

    do {
      let oddChars = '';

      for (let i = 1; i < str.length; i += 2) {
        oddChars += str[i];
      }

      str = str.replace(/./g, (char, index) => (index % 2 === 0 ? char : ''));

      str += oddChars;
      count += 1;
    } while (str !== initialStr);

    return count;
  }

  const cycleLength = findCycleLength();

  if (iterations >= cycleLength) {
    iterations %= cycleLength;
  }

  for (let iter = 0; iter < iterations; iter += 1) {
    let oddChars = '';

    for (let i = 1; i < len; i += 2) {
      oddChars += str[i];
    }

    str = str.replace(/./g, (char, index) => (index % 2 === 0 ? char : ''));

    str += oddChars;
  }

  return str;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let tempNumber = number;

  while (tempNumber > 0) {
    digits.unshift(tempNumber % 10);
    tempNumber = Math.floor(tempNumber / 10);
  }

  let i = digits.length - 2;

  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i === -1) {
    return number;
  }

  let j = digits.length - 1;

  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  const tempValue = digits[i];
  digits[i] = digits[j];
  digits[j] = tempValue;

  for (
    let left = i + 1, right = digits.length - 1;
    left < right;
    left += 1, right -= 1
  ) {
    const temp = digits[left];
    digits[left] = digits[right];
    digits[right] = temp;
  }

  let result = 0;
  for (let k = 0; k < digits.length; k += 1) {
    result = result * 10 + digits[k];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
