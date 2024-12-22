// object -destructuring

const course = {
  couseInHindi: "js",
  price: "999",
  courseInstructor: "Hitesh sir",
};

// course.courseInstructor

const { courseInstructor: instructor } = course; // minimize large name by small name e.g- instructor instead of courseInstructor.
console.log(instructor);

// react - destructuring  i.e ({ company})
const navbar = ({ company = "TCS" }) => {
  console.log(`Wellcome to ${company}`);
};

navbar((company = "Infosys"));

function nav(cpm = "tcs") {
  console.log(`begin with ${cpm}`);
}

nav("Infosys");
nav();
