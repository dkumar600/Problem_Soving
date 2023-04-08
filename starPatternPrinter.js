function startriangle(n) {
  /**
   * Step 1 : Initialize str.
   * Step 2 : Initialize a loop from 0 to n by incrementing i by 1.
   * Step 2.1 : store ' ' into str until n-i.
   * Step 2.2 : store '*' into str until (i*2+1).
   * Step 2.3 : store '\n' into str every time 2.2 loop is exited.
   * step 3 : return str.
   * Step 4 : END.
  */
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i); j++) {
      str += ' ';
    }
    for (let j = 0; j < (i * 2 + 1); j++) {
      str += '*';
    }
    str += '\n';
  }
  return str;
}
function startriangleDwn(n) {
  /**
   * Step 1 : Initialize str.
   * Step 2 : Initialize a loop from 0 to n by incrementing i by 1.
   * Step 2.1 : store ' ' into str until i.
   * Step 2.2 : store '*' into str until n - (i*2+1).
   * Step 2.3 : store '\n' into str every time 2.2 loop is exited.
   * step 3 : return str.
   * Step 4 : END.
  */
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      str += ' ';
    }
    for (let j = 0; j < (2 * n - (i * 2 + 1)); j++) {
      str += '*';
    }
    str += '\n';
  }
  return str;
}
function startriangleBoxUP(n) {
  /**
   * Step 1 : Initialize str.
   * Step 2 : Initialize a loop from 0 to n by incrementing i by 1.
   * Step 2.1 : store ' ' into str until n-i.
   * Step 2.2 : intialize a loop from 0 until (i*2+1) by incrementing j by 1.
   * Step 2.2.1 : if i === n - 1 store '*' into str.
   * Step 2.2.2 : if j === 0 or j === i*2 store '*' into str.
   * Step 2.2.3 : if j's value other 0 and i*2 store ' ' into str
   * Step 2.3 : store '\n' into str every time 2.2 loop is exited.
   * step 3 : return str.
   * Step 4 : END.
  */
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i); j++) {
      str += ' ';
    }
    for (let j = 0; j < (i * 2 + 1); j++) {
      if (i === n - 1) {
        str += '*';
      } else if (j === 0 || j === (i * 2)) {
        str += '*';
      } else {
        str += ' ';
      }
    }
    str += '\n';
  }
  return str;
}
function startriangleUpDwn(n) {
  /**
   * Step 1 : Initialize str.
   * Step 2 : Initialize a loop from 0 to n by incrementing i by 1.
   * Step 2.1 : store ' ' into str until n-i.
   * Step 2.2 : store '*' into str until (i*2+1).
   * Step 2.3 : store '\n' into str every time 2.2 loop is exited.
   * Step 3 : Initialize a loop from 0 to n by incrementing i by 1.
   * Step 3.1 : store ' ' into str until i.
   * Step 3.2 : store '*' into str until 2*n - (i*2+1).
   * Step 3.3 : store '\n' into str every time 2.2 loop is exited.
   * step 4 : return str.
   * Step 5 : END.
  */
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i); j++) {
      str += ' ';
    }
    for (let j = 0; j < (i * 2 + 1); j++) {
      str += '*';
    }
    str += '\n';
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += ' ';
    }
    for (let j = 0; j < (2 * n - (i * 2 + 1)); j++) {
      str += '*';
    }
    str += '\n';
  }
  return str;
}
function startriangleBox(n) {
  /**
   * Step 1 : Initialize str.
   * Step 2 : Initialize a loop from 0 to n by incrementing i by 1.
   * Step 2.1 : intialize a loop from 0 until n-1 by incrementing j by 1.
   * Step 2.1.1 : if i === n - 1 || i === 0 store '*' into str.
   * Step 2.1.2.1 : if j === 0 or j === n-1 store '*' into str.
   * Step 2.1.2.2 : if j's value other 0 and n-1 store ' ' into str
   * Step 2.2 : store '\n' into str every time 2.1 loop is exited.
   * step 3 : return str.
   * Step 4 : END.
  */
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === n - 1 || i === 0) {
        str += '*';
      } else if (j === 0 || j === n - 1) {
        str += '*';
      } else {
        str += ' ';
      }
    }
    str += '\n';
  }
  return str;
}
function starStaire(n) {
  /**
   * Step 1 : Initialize str.
   * Step 2 : Initialize a loop from 0 to n by incrementing i by 1.
   * Step 2.1 : store ' ' into str until n-i.
   * Step 2.2 : store '*' into str until i.
   * Step 2.3 : store '\n' into str every time 2.2 loop is exited.
   * step 3 : return str.
   * Step 4 : END.
  */
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += ' ';
    }
    for (let j = 0; j <= i; j++) {
      str += '*';
    }
    str += '\n';
  }
  return str;
}
function startriangleBox1(n) {
  /**
   * Step 1 : Initialize str.
   * Step 2 : Initialize a loop from 0 to n by incrementing i by 1.
   * Step 2.1 : intialize a loop from 0 until i by incrementing j by 1.
   * Step 2.1.1 : if i === n - 1 store '*' into str.
   * Step 2.1.2.1 : if j === 0 or j === i store '*' into str.
   * Step 2.1.2.2 : if j's value other 0 and n-1 store ' ' into str
   * Step 2.2 : store '\n' into str every time 2.1 loop is exited.
   * step 3 : return str.
   * Step 4 : END.
  */
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === n - 1) {
        str += '*';
      } else if (j === 0 || j === i) {
        str += '*';
      } else {
        str += ' ';
      }
    }
    str += '\n';
  }
  return str;
}
console.log(startriangle(5));
console.log(startriangleDwn(5));
console.log(startriangleBoxUP(6));
console.log(startriangleUpDwn(5));
console.log(startriangleBox(5));
console.log(starStaire(5));
console.log(startriangleBox1(5));
