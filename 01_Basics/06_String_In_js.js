const name = "Deepti";
const repoCount = 2;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`Deepti`);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.charAt(4));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const anotherString1 = gameName.slice(-6, -4);
console.log(anotherString1);
const url = "https://deepti.com/deeptimayee%20ojha";

console.log(url.replace("%20", "-"));
console.log(url.includes("suvadra"));

console.log(gameName.split("p"));
