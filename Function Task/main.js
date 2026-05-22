// Task 1 — Smart Attendance Checker
// Concept:
// if else
// logical operator
// function
// Scenario:
// A student can enter exam hall only if:
// attendance >= 75
// fees paid = true
// Expected:
// Allowed for Exam
// Otherwise:
// Not Allowed


function examEligibilty(attendance,feespaid){

    if(attendance >= 75 && feespaid == true){
        console.log("Allowed for Exam");
        
    }
    else{
        console.log("Not Allowed");
        
    }
}

examEligibilty(77,true);






// Task 2 — Mobile Password Strength Checker
// ===================================

// Concept:
// string
// conditions
// Requirement:
// Check password:
// minimum 8 characters
// should contain number
// should contain uppercase
// Example:
// Abc12345
// Output:
// Strong Password






function checkPass(password){

    let hasnum = false;
    let hascase = false;

    for(let i = 0;i < password.length; i++){

        if(password[i] >= "0" && password[i] <= "9"){

            hasnum = true;
        }
        if(password[i] >= "A" && password[i] <= "Z"){
            hascase = true;
        }
    }

    if(password.length >= 8 && hasnum && hascase){
        console.log("Strong Password");
        
    }
    else{
        console.log("Weak Password");
        
    }

}

checkPass("XY1234567");



// Task 3 — Find Second Largest Number
// ==========================


// Concept:
// loop
// conditions
// variables
// Input:
// [10,50,80,20,90,70]
// Output:
// 80

let arr = [10,50,80,20,90,70];

let largest = 0;
let secondlarge = 0;

for( let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        secondlarge = largest;
        largest = arr[i];
    }

    else if(arr[i] > secondlarge){
        secondlarge = arr[i];
    }

}

console.log(secondlarge);









// Task 4 — Bus Seat Booking System
// =============

// Concept:
// array
// loop
// conditions
// Requirement:
// Create 10 seats.
// If seat booked:
// Seat Already Booked
// Else:
// Seat Booked Successfully

let seats = [];
for( let i = 0; i < 10 ; i++){
  seats[i] = "empty";
}

let bookseat = 3;

if(seats[bookseat] === "booked"){
    console.log("Seat Already Booked");
    
}
else{
    seats[bookseat] = "booked";
    console.log("Seat Booked Successfully");
    

}





// Task 5 — ATM Cash Withdraw Logic
// ==============

// Concept:
// function
// return
// conditions
// Rules:
// balance = 10000
// user cannot withdraw more than balance
// minimum balance should maintain 1000
// Example:
// Withdraw:
// 9500
// Output:
// Insufficient Balance

function withdraw(balance,amount){
    if(amount > balance){
        return "Insufficient Balance";
    }

    if(balance - amount < 1000){
        return "minimum balance should maintain 1000";
    }

    return " Withdraw Successful" ;
}

console.log(withdraw(10000,11000));






// Task 6 — Product Search Engine
// ============

// Concept:
// array
// for of
// string methods
// Requirement:
// Search product from array.
// Example:
// ["iphone","samsung","realme","oppo"]
// Search:
// realme
// Output:
// Product Found


let products = ["iphone","samsung","realme","oppo"];

let search = "oppo";
let found = false;

for(let product of products){
    if(product.toLocaleLowerCase() === search.toLocaleLowerCase()){
        found = true ;
        break;
    }
}

if(found){
    console.log("product found");
    
}
else{
    console.log("Product Found");
    
}



// Task 7 — Voting Eligibility System
// ================
// Concept:
// nested if
// logical operators
// Rules:
// Person can vote only if:
// age >= 18
// has voter id
// citizenship = Indian




function checkVote(age,voterId,citizenship){
    if(age >= 18){
        if(voterId === true && citizenship === "Indian"){
            console.log("Eligible to vote");
            
        }else{
            console.log("Not Eligible");
            
        }
    }
 else{
             console.log("Not Eligible");
        }
    }
checkVote(21,true,"Indian");




// Task 8 — Online Food Order Bill
// ============

// Concept:
// function
// parameters
// arithmetic operators
// Requirement:
// Calculate:
// food price
// GST
// delivery charge
// discount
// Final Output:
// Total Bill : ₹450

function calculateBill(foodprice,gst,deliverycharge,discount){

    let gstamt = (foodprice * gst)/100
    let total = foodprice + gstamt +deliverycharge +discount;

    console.log("TotalBill :" + total);
    
}

calculateBill(400,5,30,0);



// Task 9 — Reverse Word Without reverse()
// ===============

// Concept:
// loop
// string
// Input:
// javascript
// Output:
// tpircsavaj



let word = "javascript";
let reversed = "";

for(let i = word.length-1;i >= 0; i--){
    reversed += word[i];

}

console.log(reversed);

// Task 10 — Mini Instagram Like System
// ===============

// Concept:
// variable
// function
// ternary operator
// Requirement:
// When user clicks like:
// Liked ❤️
// Else:
// Like 🤍
// Also maintain total likes count.

let totlike = 0;
let liked = false;

function likedPost(){

    liked = !liked;

     liked ? totlike++ : totlike--;

    console.log(liked ? "Liked ❤️" : "Like 🤍"  );
    
    console.log("Total  Likes : " + totlike);
    
}

likedPost();
likedPost();
likedPost();
