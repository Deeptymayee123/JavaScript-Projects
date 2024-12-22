//  reduce
const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce(function (accumulator, currentval) {
//   return accumulator + currentval;
// }); // here accumulator dont know from where to start so we need to give initial value.

// const sum = arr.reduce(function (accumulator, currentval) {
//   return accumulator + currentval;
// }, 0); //initial val is 0.

// console.log(myTotal);

// 0+1+2+3+4+5
// const initialval = 0;
// const sum = arr.reduce(
//   (sumresult, currentval) => sumresult + currentval,
//   initialval  // first, (sumresult = 0 + currentval) then (sumresult = sumresult + currentval) similarly continue this process.

// );

// const sum = arr.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0); //readability is greater.

// const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// e.g

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 3999,
  },
];

const priceto_pay = shoppingCart.reduce((acc, val) => acc + val.price, 0);
console.log(priceto_pay);
