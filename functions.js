// we will build some real world usable functions

// valid price checking
function validPrice(price){
    return typeof price === "number" && price > 0;
}

console.log(validPrice(0));


// email validation
function validEmail(email){
    return email.includes("@") && email.includes(".");
}

console.log(validEmail("rubayat.alam04@gmail.com"));

// calculate the discount price of any product
function calculateDiscount(price, percentage)
{
     let discountPrice = (price * percentage)/100;
     let netPrice = price - discountPrice;
     return netPrice;
}

console.log(calculateDiscount(1200,50));

// formate of taka Dollar to BDT

function dollarToBdt(dollar, rate){
    let inBdt = dollar*rate;
    return inBdt;
}
console.log("Taka:",dollarToBdt(1000,123.28),"BDT");

// Capitalized

function capWord(word){
     if(!word) return 0;
     return word.charAt(0).toUpperCase()+word.slice(1);
}

console.log(capWord("elephent"));