
let students = [
    {
        Name: "Rafi",
        Id: 138,
        Department:"EEE",
        grades:[2.75,3.45,3.65,3.54],
    },
    {
        Name: "AKM Nur",
        Id: 143,
        Department:"CSE",
        grades:[2.75,3.45,3.65,3.54],
    },
    {
        Name: "Sadman",
        Id: 140,
        Department:"EEE",
        grades:[2.75,3.45,3.65,3.54],
    },

]

students[2].grades[2] = 4; // adding something
const entries = console.log(students[2].grades[2]);
// console.log(entries);