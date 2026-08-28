// validity function

// email
function validEmail(email){
    return email.includes("@") && email.includes(".");
}
// discount
function discount(price,percentage){
    let discountPrice = (price * percentage)/100;
    let newPrice = price - discountPrice;
    return newPrice;
}
// VAT
function finalNetBill(price, vat=15){
    let vatPrice = (price * vat)/100;
    // return vatPrice + price;
    return vatPrice;
}

// formate amount
function formateMoney(amount){
    return `${amount.toFixed(2)} BDT`;
}

// Capitalize
function Capitalized(word)
{
    if(!word) return 0;
    return word.charAt(0).toUpperCase() + word.slice(1);
}

//Process Order
function processOrder(user,itemPrice,discountCode){
    console.log(`-------Processing Order for ${Capitalized(user.name)}-------`);
    
    const now = new Date();
    console.log(`Date: ${now}`);

    if(!validEmail(user1.email)) return 0;
    console.log(`email: ${user1.email}`);

    if(!discount(discountCode) === "NLB26")
        return 0;
    console.log(`Product Price: ${itemPrice} BDT \nDiscount Price: ${discount(itemPrice,20)} BDT \nVat: 15% \nTotal Price: ${discount(itemPrice,20) + finalNetBill(itemPrice)} BDT`);
    
}

const user1 = {name: "rubayat", email:"rubayat.alam04@gmail.com"};

processOrder(user1,1335,"NLB26");