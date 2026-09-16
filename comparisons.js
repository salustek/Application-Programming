function comparisons() {
  // 5 //
  //(tunnis tehtud näide)
  const user = {
  name: "Skev",
  age: 21,
  isLoggedIn: true,
  email: "" 
  };


  const isAdult = user.age >= 18;        
  const isMinor = user.age < 18;        
  const hasCorrectAge = user.age === 21; 


  if (!user.email) {
    console.log("Please add an email address.");
  }

  if (user.isLoggedIn && isAdult) {
    console.log(`Welcome back, ${user.name}! Full access granted.`);
  } else if (user.isLoggedIn && isMinor) {
    console.log(`Hi ${user.name}, you have limited access (under 18).`);
  } else if (!user.isLoggedIn) {
    console.log("Please log in to continue.");
  } else {
    console.log("Something went wrong.");
  }

  const statusMessage = isAdult ? "Standard account" : "Restricted account";
  console.log(statusMessage);
}
comparisons();