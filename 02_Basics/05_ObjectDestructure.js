// object -destructuring

const course = {
  couseInHindi: "js",
  price: "999",
  courseInstructor: "Hitesh sir",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;
console.log(instructor);

// react - destructuring
const navbar = ({ company }) => {
  console.log(`Wellcome to ${company}!`);
};

navbar((company = "TCS"));
