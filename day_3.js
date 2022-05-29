// 29th May 2022

// Question: https://bigfrontend.dev/problem/implement-basic-debounce

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  // your code here
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

// Question 2: https://bigfrontend.dev/problem/implement-debounce-with-leading-and-trailing-option

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  // your code here
  const { leading, trailing } = option;
  let timer;
  return (...args) => {
    let invoked = false;

    if (!timer && leading) {
      func(...args);
      invoked = true;
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if (!invoked && trailing) {
        func(...args);
      }
      timer = null;
    }, wait);
  };
}

// Question 3: https://bigfrontend.dev/problem/can-you-shuffle-an-array

/**
 * @param {any[]} arr
 * @returns {void}
 */
function shuffle(arr) {
  // modify the arr inline to change the order randomly
  arr.forEach((_, index) => {
    const randomPositionIndex = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[randomPositionIndex]] = [
      arr[randomPositionIndex],
      arr[index],
    ];
  });
}

// Question: https://bigfrontend.dev/problem/decode-message

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  // your code here

  if (!message || !message.length || !message[0].length) {
    return "";
  }

  let row = 0;
  let col = 0;

  let totalCols = message[0].length;
  let totalRows = message.length;

  let decodeMsg = "";
  while (col < totalCols) {
    decodeMsg += message[row][col];

    if (!row || row < totalRows - 1) {
      // if less than total rows
      row++;
    } else {
      // otherwise back to zero
      row--;
    }
    // always go forward in column
    col++;
  }
  return decodeMsg;
}
