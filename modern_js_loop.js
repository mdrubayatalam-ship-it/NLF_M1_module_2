//for of , for in

// for of----> Array theke element nite for of use korbo

// const myGames = ["Red Dead Redemption","Call of Duty","GTA 5","Valorant","CS2"];

// for(let games of myGames)
// {
//     console.log("Play: ", games);
// }

// for in----->Object theke keys nite for in use korbo

const myCourses = {
     name: "Engineering Electromagnatic",
     credit: 3.00,
     prerequisite: "None",
     year: "Third",
     Semester: "First"
};

for(let courses in myCourses)
{
    console.log(courses,"-->",myCourses[courses]);
}