/* eslint-disable max-len */
function StarPattern1(n) {
  /*
      Print Below Pattern
      *****
      ****
      ***
      **
      *
      */
  /*
     * Algorithm
     * Step 1 - initialize a string variable 'str' with '\n'.
     * Step 2 - Initialize a loop from 1 to n and increment the value of i by 1.
     // eslint-disable-next-line max-len
     * Step 2.1 - Intialize a nested loop in first loop that will increment the value of j by 1 from 1 to n-i+1.
     * Step 2.1.1 - store the '*' into str everytime second loop runs.
     * Step 2.2 - after terminating second loop, store '\n' into 'str'.
     * Step 3 - print the value of 'str'
     */
  let str = '\n';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}
function StarPattern2(n) {
  /*
      Print Below Pattern
      *****
      *****
      *****
      *****
      *****
      */
  /*
     * Algorithm
     * Step 1 - initialize a string variable 'str' with '\n'.
     * Step 2 - Initialize a loop from 1 to n and increment the value of i by 1.
     * Step 2.1 - Intialize a nested loop in first loop that will increment the value of j by 1 from 1 to n.
     * Step 2.1.1 - store the '*' into str everytime second loop runs.
     * Step 2.2 - after terminating second loop, store '\n' into 'str'.
     * Step 3 - print the value of 'str'
     */
  let str = '\n';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}
function rowPattern3(n) {
  /*
      Print Below Pattern
      11111
      2222
      333
      44
      5
      */
  /*
     * Algorithm
     * Step 1 - initialize a string variable 'str' with '\n'.
     * Step 2 - Initialize a loop from 1 to n and increment the value of i by 1.
     * Step 2.1 - Intialize a nested loop in first loop that will increment the value of j by 1 from 1 to n-i+1.
     * Step 2.1.1 - store the value of i into str everytime second loop runs.
     * Step 2.2 - after terminating second loop, store '\n' into 'str'.
     * Step 3 - print the value of 'str'
     */
  let str = '\n';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      str += i;
    }
    str += '\n';
  }
  console.log(str);
}
function numberPattern4(n) {
  /*
      Print Below Pattern
      12345
      2345
      345
      45
      5
      */
  /*
     * Algorithm
     * Step 1 - initialize a string variable 'str' with '\n'.
     * Step 2 - Initialize a loop from 1 to n and increment the value of i by 1.
     * Step 2.1 - Intialize a nested loop in first loop that will increment the value of j by 1 from i to n.
     * Step 2.1.1 - store the value of j into 'str' everytime second loop runs.
     * Step 2.2 - after terminating second loop, store '\n' into 'str'.
     * Step 3 - print the value of 'str'
     */
  let str = '\n';
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      str += j;
    }
    str += '\n';
  }
  console.log(str);
}
function StarPattern5(n) {
  /*
      Print Below Pattern
      *
      **
      ***
      ****
      *****
      */
  /*
     * Algorithm
     * Step 1 - initialize a string variable 'str' with '\n'.
     * Step 2 - Initialize a loop from 1 to n and increment the value of i by 1.
     * Step 2.1 - Intialize a nested loop in first loop that will increment the value of j by i from i to n.
     * Step 2.1.1 - store the '*' into str everytime second loop runs.
     * Step 2.2 - after terminating second loop, store '\n' into 'str'.
     * Step 3 - print the value of 'str'
     */
  let str = '\n';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}

StarPattern1(10);
StarPattern2(10);
rowPattern3(6);
numberPattern4(5);
StarPattern5(10);
