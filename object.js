
//objects
var student1 = {
    name: "rakibul",
    age: 23,
    id: 115,
    address: "bogura"
};
console.log(student1);
var mobile = {
    name: "xiaomi",
    color: "vintage bronze",
    model: "note 10 pro",
    price: 27000,
};
console.log(mobile);

//object er vetor property
var mobile = {
    name: "xiaomi",
    color: "vintage bronze",
    model: "note 10 pro",
    price: 26999,
};
//changle value
mobile.price = 27000;
//or
mobile["price"] = 27000;
console.log(mobile);