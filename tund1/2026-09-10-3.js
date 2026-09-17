const users = [
  { id: 1, name: "Mari", age: 22, active: true },
  { id: 2, name: "Jüri", age: 17, active: false },
  { id: 3, name: "Kati", age: 31, active: true },
  { id: 4, name: "Martin", age: 19, active: false },
  { id: 5, name: "Laura", age: 26, active: true }
];

//3.1// Kõikide kasutajate nimede kuvamine console.log abil
users.forEach(user => console.log(user.name));


//3.2// Aktiivsed kasutajad .filter abil
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);


//3.3// Vähemalt 18-aastased kasutajad .filter abil
const adultUsers = users.filter(user => user.age >= 18);
console.log(adultUsers);


//3.4// Uus massiiv ainult nimedega .map abil
const userNames = users.map(user => user.name);
console.log(userNames);


//3.5// Kasutaja, kelle id on 3, .find abil
const userWithId3 = users.find(user => user.id === 3);
console.log(userWithId3);


//3.6// Aktiivsuse staatus
function getUserStatus(user) {
  if (user.active) {
    return "Aktiivne";
  } else {
    return "Mitteaktiivne";
  }
}
//3.7// Arrow greeting template literaliga
const getGreeting = (user) => `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;

console.log(getGreeting(users[0])); // "Tere, Mari! Sa oled 22 aastat vana."


//3.8// Destructuring
const { name, age } = users[0];
console.log(name); // "Mari"
console.log(age);  // 22


//3.9// Spread süntaksiga uue kasutaja lisamine
const newUser = { id: 6, name: "Skev", age: 21, active: true };
const updatedUsers = [...users, newUser];

console.log(updatedUsers);// sisaldab 6 kasutajat
console.log(users.length);// ikka sama, algne massiiv ei muutu


//3.10// Valikuline omadus aadress
const usersWithAddress = users.map(user =>
  user.id === 1
    ? { ...user, address: { city: "Tallinn" } }
    : user
);
console.log(usersWithAddress[0]);

// Kasutajate linna kuvamine (kellel on)
usersWithAddress.forEach(user => {
  console.log(`${user.name}: ${user.address?.city ?? "Linn puudub"}`);
});
// Mari: Tallinn
// Jüri: Linn puudub
// Kati: Linn puudub
// Martin: Linn puudub
// Laura: Linn puudub


//3.11// .forEach abil kasutajate staatuse kuvamine
users.forEach(user => {
  console.log(`${user.name} - ${getUserStatus(user)}`);
});
// Mari – Aktiivne
// Jüri – Mitteaktiivne
// Kati – Aktiivne
// Martin – Mitteaktiivne
// Laura – Aktiivne


//3.12// Kasutajate sorteerimine vanuse järgi
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log(sortedByAge);