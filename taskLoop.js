/* eslint-disable no-plusplus */
function loop1() {
  // 1 1 1 2 2 2 3 3 3 4 4 4
  let str = '';
  let j = 1;
  let n = 3;
  for (let i = 1; i <= 15; i++) {
    if (i <= n) {
      str = `${str + j.toString()} `;
    } else {
      // eslint-disable-next-line no-plusplus
      j++;
      n += 4;
    }
  }
  console.log(str);
}
function loop2() {
  // 0 100 200 300 400 500 600 700 800 900 1000
  let str = '';
  for (let i = 0; i <= 1000; i += 100) {
    str = `${str + i.toString()} `;
  }
  console.log(str);
}
function loop3() {
  // 1 2 4 8 16 32 64 128
  let str = '';
  for (let i = 1; i <= 128; i *= 2) {
    str = `${str + i.toString()} `;
  }
  console.log(str);
}
function loop4() {
  // 0 2 4 6 8 10
  let str = '';
  for (let i = 0; i <= 10; i += 2) {
    str = `${str + i.toString()} `;
  }
  console.log(str);
}
function loop5() {
  // 3 6 9 12 15
  let str = '';
  for (let i = 1; i <= 5; i++) {
    const j = i * 3;
    str = `${str + j.toString()} `;
  }
  console.log(str);
}
function loop6() {
  // 9 8 7 6 5 4 3 2 1 0
  let str = '';
  for (let i = 9; i >= 0; i--) {
    str = `${str + i.toString()} `;
  }
  console.log(str);
}
function loop7() {
  // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
  let str = '';
  let j = 0;
  for (let i = 1; i <= 3; j++) {
    str = `${str + j.toString()} `;
    if (j === 4) {
      i++;
      j = -1;
    }
  }
  console.log(str);
}
loop1();
loop2();
loop3();
loop4();
loop5();
loop6();
loop7();
