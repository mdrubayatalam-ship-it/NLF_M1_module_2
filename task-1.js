// koto gula item kinechi and and koto tk bill hoyeche seshe bdt te dekhate hbe print kore

let cart = [
    {name: "Shirt",price: 1200,quantity:2},
    {name: "Pant",price: 1300,quantity:1},
    {name: "Socks",price: 120,quantity:3},
]

let cartName = [];
let totalQuantity = 0;
let totalAmount = 0;
for(let item of cart)
{
    // cartName += item.name + ",";
    totalQuantity += item.quantity;
    totalAmount += item.price * item.quantity;
    console.log("Purchase Item:",item.name ,"|","Price:",item.price,"BDT","|","Quantity:",item.quantity);
}



console.log("----------------------------------------------------","\nTotal Quantity:",totalQuantity)
console.log("----------------------------------------------------","\nTotal Price:",totalAmount,"BDT")
