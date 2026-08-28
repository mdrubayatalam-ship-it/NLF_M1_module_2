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
    return vatPrice + price;
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

}

