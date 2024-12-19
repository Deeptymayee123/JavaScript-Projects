const user = {
  userName: "deepti",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website`); //this =>  refers current context(values).
    console.log(this); // refers current context(values).
  },
};
//arrow fun doesnot contain this.
// user.welcomeMessage();
// user.userName = "Kishan";
// user.welcomeMessage();

// console.log(this); //o/p : {} => bcz now we are in the node environment.

//  console.log(this) where as in browser  i.e inspecting google we can see it gives o/p as window object.

// function kadha() {
//   let userName = "dipa";
//   console.log(this.userName);//o/p- undefined
// }
// kadha();

//  +++++++++++++++++fun declaration through arrow function+++++++++++++++++++++++++
const kadha = () => {
  let userName = "dipa";
  // console.log(this.userName); //o/p- undefined
  console.log(this);
};
kadha();

//arrow fun syntax:

//way - 1
// const addTwo = (n1, n2) => {
//   return n1 + n2;  //explicite return
// };//-->if we write {}, we need to write return keyword

// way- 2
// const addTwo = (n1, n2) => n1 + n2;

// const addTwo = (n1, n2) => (n1 + n2); // if () then no need return keyword ,more used in react(implicite return)

// const addTwo = (n1, n2) => {
//   userName: "deepti";
// };// gives undefined as o/p

const addTwo = (n1, n2) => ({ userName: "deepti" }); // for returning an object we take it in {}.
console.log(addTwo(3, 4)); //it will return totally this { userName: "deepti" }
