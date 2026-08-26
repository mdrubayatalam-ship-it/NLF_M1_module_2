// Calculate the Maximum values of an array
// const myArray = [55,48,12,65,99,105,63,47,75]; //declaring array

// let maxValue = myArray[0]; // initialize maxValue at index 0
// for(let i = 1 ; i < myArray.length; i++) // applying for loop
// {
//      if(maxValue < myArray[i]) // if the value of myArray is greater than current max Value then restore it in maxValue (next step)
//      {
//         maxValue = myArray[i];
//      }
// }
// console.log("Max Value: ", maxValue); // print the Max value




// for reverse printing an array
// let reverse = [];
// for(let i = myArray.length-1 ; i >= 0 ; i--)
// {
//     reverse.push(myArray[i]);
// }

// console.log(reverse);



const frndName = ["Rakib","shanto","Joy"];
let reversName = [];
for(let i = frndName.length - 1; i>=0; i--)
{ 
    reversName.push(frndName[i]);
}

console.log(reversName);


