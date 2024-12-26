// fetch("https://randomuser.me/api/").then().catch().finally();
//1
const promiseOne = new Promise(function (resolve, reject) {
  //do any async fun
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve(); //it connect resolve with .then
  }, 1000);
});

//now consume the promise
promiseOne.then(function () {
  console.log("Promise consume");
}); //direct connection with resolve

//2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved.");
});

//3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "deepti", email: "dipa@example.com" }); // it will pass in .then function.
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//4
const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    //let error = false;
    if (!error) {
      resolve({ username: "kishan", password: "123" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});
const userName = promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((myuser) => {
    //arrow function having no name
    //this is chaining data pass to upper .then will pass also here.
    console.log(myuser);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected.")); // it must execute bydefault.)

// console.log(userName);

//5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ username: "kishan", password: "123" });
    } else {
      reject("ERROR: js went wrong!"); //reject means error code.
    }
  }, 1000);
});

//promise is handleded by async fun except .then or .catch .we need when we use database connection.
async function consumePromiseFive() {
  // async does not handle error directly.
  // const response = await promiseFive; //promise is an object we can not consume it like await promiseFive().
  // console.log(response);

  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//6

// async function getalluser() {
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     // console.log(response);
//     // const data =  response.json(); // it takes time to convert.Hence it also need await.
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: error");
//   }
// }

// getalluser();

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json(); // we will return the response and it will handle by next .then.
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log("E: error"))
  .finally(() => console.log("executed finally block successfully."));
