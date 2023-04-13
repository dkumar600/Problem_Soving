/**
* Step - 1 : Take the roman number string and n number
* Step - 2 : Initialize a loop from 0 to length of string with i incremented by 1.
* Step - 2.1 : Now, check the letter of the string at ith position.
* Step - 2.1.1 : check if next position of the array has bigger number value.
* Step - 2.1.1.1 :if yes, check for valid character like ith position has 'C' the
                number after must next char must be 'D' or 'M'.
* Step - 2.1.1.2 : if no, Add the char value into n.
* Step - 3 : Print the value.
* Step - 4 : END.
* Note : Assigned c =17 for chekking if roman is valid or invalid.
*/
function RtoI(s) {
  let n = 0;
  let c = 17;
  let copyS = s;
  let leftChar = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I' && c > 0) {
      copyS = s.slice(i + 1, s.length);
      if (c > 3) {
        c = 3;
      }
      if (s[i + 1] === 'V' && c === 3) {
        c = 0;
        n += 4;
        i++;
        copyS = s.slice(i + 1, s.length);
      } else if (s[i + 1] === 'X' && c === 3) {
        c = 0;
        n += 9;
        i++;
        copyS = s.slice(i + 1, s.length);
      } else {
        c--;
        n += 1;
      }
    } else if (s[i] === 'C' && c > 10) {
      copyS = s.slice(i + 1, s.length);
      if (c > 12) {
        c = 12;
      }
      if (s[i + 1] === 'D' && c === 12) {
        c = 10;
        n += 400;
        i++;
        copyS = s.slice(i + 1, s.length);
      } else if (s[i + 1] === 'M' && c === 12) {
        c = 10;
        n += 900;
        i++;
        copyS = s.slice(i + 1, s.length);
      } else {
        c--;
        n += 100;
      }
    } else if (s[i] === 'X' && c > 5) {
      copyS = s.slice(i + 1, s.length);
      if (c > 8) {
        c = 8;
      }
      if (s[i + 1] === 'L' && c === 8) {
        c = 5;
        n += 40;
        i++;
        copyS = s.slice(i + 1, s.length);
      } else if (s[i + 1] === 'C' && c === 8) {
        c = 5;
        n += 90;
        i++;
        copyS = s.slice(i + 1, s.length);
      } else {
        c--;
        n += 10;
      }
    } else if (s[i] === 'L' && c > 9) {
      c = 9;
      n += 50;
      copyS = s.slice(i + 1, s.length);
    } else if (s[i] === 'V' && c > 4) {
      n += 5;
      c = 4;
      copyS = s.slice(i + 1, s.length);
    } else if (s[i] === 'D' && c > 13) {
      c = 13;
      n += 500;
      copyS = s.slice(i + 1, s.length);
    } else if (s[i] === 'M' && c > 14) {
      n += 1000;
      c--;
      copyS = s.slice(i + 1, s.length);
    } else {
      leftChar += s[i];
    }
  }
  if (copyS !== '' || leftChar !== '') {
    console.log('Roman Number is Invalid'); // return false;
  } else {
    console.log(n); // return n;
  }
}
RtoI('MCMLXXIV');

// MCMCDLXXIV
