import getUser from "../Logical Operators/Nullish Coalescing/Examples/nullishCoalescing";

const user = getUser();
console.log(user);
// const firstName = user.name.first;

// const firstName = user && user.name && user.name.first; if any return undefined this errors
const firstName = user?.name?.first;

// old way
const getLongitudeOldWay =
  user &&
  user.address &&
  user.address.coordinates &&
  user.address.coordinates.long;

// optional chaining
const getLongitudeOptionalChaining = user?.address?.coordinates?.long;
// generate random first name if it exist
console.log("First name: ", firstName);
// generate random longitude if it exist
console.log("Longitude: ", getLongitudeOptionalChaining);

// access a function inside of the user optoion that may or may not exist
user.greet?.();

// access the age property on user
user?.age;
