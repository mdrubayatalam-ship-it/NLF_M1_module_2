let user = {
    name: "Rubayat",
    age: 25,
    address: "Rajshahi"

};

// console.log(user["name"]);
// delete user.age;
// console.log(user);
user.address = {
    city: "Rajshahi",
    area: "Upashahar"
};

// console.log(Object.keys(user));
console.log(Object.entries(user));