
// 1. E-Commerce Product Filter

// Task:
// Fetch all products
// Filter products whose:
// price > 100
// category = "electronics"

async function getProducts() {

  let response = await fetch("https://fakestoreapi.com/products/");
  let products = await response.json();

  let filtered = products.filter(product =>
    product.price > 100 &&
    product.category === "electronics"
  );

  filtered.forEach(product => {
    console.log(product.title);
    console.log(product.price);
  });

}

getProducts();




// 2. Online Shopping Cart Total
// Task:

// Calculate:
// Total bill amount
// Expected Output:
// 8500
// Use:
// reduce()


let cart = [
  {product:"Shoes", price:2000, qty:2},
  {product:"Watch", price:1500, qty:1},
  {product:"Bag", price:1000, qty:3}
];

let total = cart.reduce((sum, item) => {
  return sum + (item.price * item.qty);
}, 0);

console.log(total);


// 3. Employee Salary Dashboard
// Task:
// Filter employees whose salary is greater than 40000.

let employees = [
  {name:"John", salary:25000},
  {name:"Sam", salary:50000},
  {name:"Ravi", salary:45000},
  {name:"Kumar", salary:30000}
];

let highSalary = employees
.filter(emp => emp.salary > 40000)
.map(emp => emp.name);

console.log(highSalary);



// 4. Food Delivery App
// Task:
// Find first restaurant rating greater than 4.5

let hotels = [
  {hotel:"A2B", rating:4.1},
  {hotel:"KFC", rating:4.7},
  {hotel:"Dominos", rating:4.3}
];

let result = hotels.find(hotel => hotel.rating > 4.5);

console.log(result);




// 5. Student Pass/Fail System
// Task:
// Check all students passed or not.

let marks = [45,67,89,90,34];

let pass = marks.every(mark => mark >= 35);

console.log(pass);



// 6. OTP Verification System
// Task:
// Check whether entered OTP exists.


let otpList = [1234,4567,7890,9876];
let enteredOtp = 4567;
let isValid = otpList.includes(enteredOtp);

console.log(isValid);



// 7. Movie Booking Timer
// Task:
// Create countdown from 10 to 0 using:


let count = 10;

let timer = setInterval(() => { 
    console.log(count);
    count--;
    if(count < 0) {
        clearInterval(timer);
        console.log("Booking Closed");
    }
}, 1000);








// 8. Instagram Like Counter
// Task:
// Every second increase likes count.
// Likes : 1
// Likes : 2
// Likes : 3



let likes = 0;

let likeTimer = setInterval(() => {

  likes++;

  console.log("Likes :", likes);

  if(likes === 10){
    clearInterval(likeTimer);
  }

},1000);

// 9. Login Authentication
// Task:
// Check:
// username
// password



let username = "admin";
let password = "12345";

if(username === "admin" && password === "12345"){
  console.log("Login Success");
}
else{
  console.log("Invalid Credentials");
}



// 10. Weather App Simulation
// Task:
// Create Promise manually.
// Condition:
// If internet = true → resolve("Weather Data")
// else reject("No Internet")


let internet = true;

let weatherPromise = new Promise((resolve,reject)=>{

  if(internet){
    resolve("Weather Data");
  }
  else{
    reject("No Internet");
  }

});

weatherPromise
.then(data => console.log(data))
.catch(error => console.log(error));


// 11. Amazon Product Search
// Task:
// Search products containing word "shirt"

let products = ["shirt","watch","tshirt","mobile"];

let shirtProducts = products.filter(product =>
  product.includes("shirt")
);

console.log(shirtProducts);


// 12. YouTube Video Duration
// Task:
// Calculate total watch time.


let videos = [10,20,30,40];

let watchTime = videos.reduce((sum,time)=>{
  return sum + time;
},0);

console.log(watchTime);



// 13. Swiggy Order Status
// Task:
// Use switch statement.

let status = "Preparing";

switch(status){

  case "Placed":
    console.log("Order Placed");
    break;

  case "Preparing":
    console.log("Food Preparing");
    break;

  case "Out for Delivery":
    console.log("Order On The Way");
    break;

  case "Delivered":
    console.log("Order Delivered");
    break;

  default:
    console.log("Invalid Status");

}






// 14. WhatsApp Chat Analyzer
// Task:
// Count total messages.


let chats = ["hi","hello","where","ok","bye"];

let messageCount = 0;

for(let i=0; i<chats.length; i++){
  messageCount++;
}

console.log("Total Messages :", messageCount);


// 15. Netflix Age Restriction
// Task:
// If age >= 18:
// show movie
// Else:
// access denied


let age = 20;

let access = age >= 18
? "watch movie"
: "access denied";

console.log(access);



// 16. Flipkart Product Sorting
// Task:
// Sort products by price low to high.
// let prices = [1200,450,9999,2500,700]
// Use:
// sort((a,b)=>a-b)

let prices = [1200,450,9999,2500,700];

prices.sort((a,b)=>a-b);

console.log(prices);



// 17. Employee Attendance
// Task:
// Convert:
// ["present","absent","present"]
// Into object count:


let attendance = ["present","absent","present"];

let attendanceCount = attendance.reduce((obj,value)=>{

  obj[value] = (obj[value] || 0) + 1;

  return obj;

},{});

console.log(attendanceCount);



// 18. Banking System
// Task:
// Create:
// deposit()
// withdraw()
// checkBalance()
// Using functions.


let balance = 5000;

function deposit(amount){

  balance += amount;

  console.log("Deposited :", amount);

}

function withdraw(amount){

  if(amount <= balance){

    balance -= amount;

    console.log("Withdraw :", amount);
  }
  else{
    console.log("Insufficient Balance");
  }
}
function checkBalance(){

  console.log("Balance :", balance);

}

deposit(2000);
withdraw(1000);
checkBalance();



// 19. Zomato Rating Checker
// Task:
// Check any hotel rating below 3.
// Use:
// some()

let ratings = [4.5,4.2,2.8,3.9];

let lowRating = ratings.some(rating => rating < 3);

console.log(lowRating);





// 20. Real API Product Table
// Task:
// Fetch API and print:
// title
// price
// image


async function showProducts(){

  let response = await fetch("https://fakestoreapi.com/products/");
  let data = await response.json();

  let cards = data.map(product => {

    return `
      <div>
        <img src="${product.image}" width="100">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
      </div>
    `;

  });

  document.body.innerHTML = cards.join("");

}

showProducts();





// 21. Build Small E-Commerce Logic
// Features:
// Fetch products
// Filter by category
// Sort by price
// Search product
// Add to cart
// Total calculation
// Concepts Covered:
// fetch
// async
// array methods
// DOM
// events
// functions
// objects
// loops
// higher order functions
let cartItems = [];

async function ecommerce(){

  let response = await fetch("https://fakestoreapi.com/products/");
  let products = await response.json();

  // Search
  let searched = products.filter(product =>
    product.title.toLowerCase().includes("shirt")
  );

  console.log(searched);

  // Category Filter
  let electronics = products.filter(product =>
    product.category === "electronics"
  );

  console.log(electronics);

  // Sort
  let sorted = products.sort((a,b)=>
    a.price - b.price
  );

  console.log(sorted);

  // Add To Cart
  cartItems.push(products[0]);
  cartItems.push(products[1]);

  console.log(cartItems);

  // Total
  let finalTotal = cartItems.reduce((sum,item)=>{
    return sum + item.price;
  },0);

  console.log("Total :", finalTotal);

}

ecommerce();