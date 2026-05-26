// 1. Employee Bonus Filter

// Task:
// You have employee salaries.
// Find employees whose salary is greater than 300000 and print:
// "Congrats <name>"



let employees = [
  {name:"john", salary:200000},
  {name:"rahul", salary:500000},
  {name:"siva", salary:700000}
]


employees
.filter(emp => emp.salary > 300000)
.map(emp => console.log("Congrats " + emp.name));




// 2. Shopping Cart Total
// Concept:
// reduce()
// Task:
// Calculate total bill amount.


let cart = [1200, 3400, 500, 999];


let total = cart.reduce((sum, item) => sum + item, 0);

console.log(total);



// 3. Login Username Formatter
// Concept:
// slice(), toUpperCase()
// Convert first letter into capital.


let user = "naveen";

let result = user.slice(0,1).toUpperCase() + user.slice(1);

console.log(result);



// 4. OTP Checker
// Concept:
// includes()
// Task:
// Check whether OTP contains number 0.


 let otp = "560890"


if(otp.includes("0")){
    console.log("Valid OTP");
}
else{
    console.log("Invalid OTP");
}



// 5. Food Delivery App
// Concept:
// push(), pop()
// Task:
// Add new order and remove delivered order.


 let orders = ["burger","pizza"]
 orders.push("shawarma");

orders.pop();

console.log(orders);



// 6. Attendance Checker
// Concept:
// every()
// Task:
// Check whether all students passed.


let marks = [40,50,70,80]

let passed = marks.every(mark => mark >= 35);

console.log(passed);


// 7. Find VIP Customer
// Concept:
// find()
// Task:
// Find first customer whose purchase is greater than 10000.


let customer = [
  {name:"arun", purchase:5000},
  {name:"vijay", purchase:15000},
  {name:"surya", purchase:25000}
]
let vip = customer.find(c => c.purchase > 10000);

console.log(vip.name);



// 8. Reverse Chat Message
// Concept:
// split(), reverse(), join()
// Task:
// Reverse the message.



let msg = "hello"

let reverse = msg.split("").reverse().join("");

console.log(reverse);



// 9. Remove Duplicate Product
// Concept:
// indexOf()
// Task:
// Find position of "mobile".



let products = ["tv","laptop","mobile","watch"]

console.log(products.indexOf("mobile"));



// 10. Student Rank Sort
// Concept:
// sort()
// Task:
// Sort marks ascending order.

// Expected Output:
// [12,45,67,89,99]

let marks1 = [99,45,12,67,89]

marks1.sort((a,b) => a-b);

console.log(marks1);


// 11. Movie Search
// Concept:
// some()
// Task:
// Check whether "Leo" movie exists.

let movies = ["Jailer","Leo","Vikram"]

console.log(movies.some(movie => movie === "Leo"));



// 12. Hide Mobile Number
// Concept:
// slice()
// Task:
// Show only last 4 digits.


let num = "6383366774";

console.log(num.slice(-4));


// 13. Online Exam Result
// Concept:
// ternary operator
// Task:
// If mark >= 35 print "Pass" else "Fail".


let mark = 78
console.log(mark >= 35 ? "Pass" : "Fail");


// 14. Cab Booking Price
// Concept:
// function, return
// Task:
// Create function for total fare.



function totalFare(baseFare, extraKm){
    return baseFare + extraKm;
}

console.log(totalFare(100,50));


// 15. Instagram Hashtag Generator
// Concept:
// replaceAll()
// Task:
// Convert spaces into _

let tag = "web developer"
console.log(tag.replaceAll(" ","_"));


// 16. Netflix Kids Content
// Concept:
// filter()
// Task:
// Get only movies below age 18.



let movies1 = [
  {name:"A", age:13},
  {name:"B", age:18},
  {name:"C", age:10}
]

movies1
.filter(movie => movie.age < 18)
.forEach(movie => console.log(movie.name));

// 17. E-commerce Product Search
// Concept:
// startsWith()
// Task:
// Check whether product starts with "i".
// Input:
// let product = "iphone"
// Expected Output:
// true

let product = "iphone"
console.log(product.startsWith("i"));


// 18. WhatsApp Group Names
// Concept:
// forEach()
// Task:
// Print all group names with numbering.

let groups = ["office","friends","family"]
groups.forEach((group,index) => {
    console.log((index + 1) + " " + group);
});



// 19. Salary Highest Finder
// Concept:
// reduce()
// Task:
// Find highest salary.



let salary = [20000,50000,70000,10000];

let highest = salary.reduce((max, item) => item > max ? item : max);

console.log(highest);
// 20. Password Security Checker
// Concept:
// length, includes()
// Task:
// Password should:
// contain @
// minimum 8 characters


let password = "navi@123";

if(password.includes("@") && password.length >= 8){
    console.log("Strong Password");
}
else{
    console.log("Weak Password");
}