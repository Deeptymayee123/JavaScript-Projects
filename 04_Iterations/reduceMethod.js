//  reduce
const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce(function (accumulator, currentval) {
//   return accumulator + currentval;
// }); // here accumulator dont know from where to start so we need to give initial value.

const sum = arr.reduce(function (accumulator, currentval) {
  return accumulator + currentval;
}, 0);

console.log(myTotal);

// 0+1+2+3+4+5
// const initialval = 0;
// const sum = arr.reduce(
//   (sumresult, currentval) => sumresult + currentval,
//   initialval  // first, (sumresult = 0 + currentval) then (sumresult = sumresult + currentval) similarly continue this process.

// );

console.log(sum);
