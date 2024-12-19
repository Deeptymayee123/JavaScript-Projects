const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newn = mynums.map((num) => num + 10);
// const newn = mynums.map((num) => {
//     return num + 10;
//   });

// chaining

const newn = mynums
  .map((num) => num * 10) //result of this line will pass to 2nd line this is chaining method.
  .map((num) => num + 1)
  .filter((num) => num > 40); /*o/p:- [
     41,  51,
    61, 71, 81, 91, 101
  ]*/
console.log(newn);
