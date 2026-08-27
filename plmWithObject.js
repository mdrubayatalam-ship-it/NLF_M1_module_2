const student = {
     name: "Armaan Khan",
     id: 23,
     class: "Ten",
     section: "A",
     session: 2026-27,
     marks:{
        Bengali1:80,
        Bengali2:87,
        English1:94 ,
        English2:87 ,
        Physics: 93,
        Chemistry: 0,
        Math: 75,
        HigherMath: 95,
        Religion: 91, 
     }
}

let totalSubject = 0;
let totalMarks = 0;

for(const subjct in student.marks)
{
      totalMarks += student.marks[subjct];
      totalSubject++;
   
}

let avgMarks = (totalMarks / totalSubject).toFixed(2);

if(avgMarks >= 80)
{
     console.log("Congratulation, You have got",avgMarks,"%","\nStatus: A+");
}
else
{
    console.log("Very Good !! Need to give More Effort, You Have Got",avgMarks,"%");
}

