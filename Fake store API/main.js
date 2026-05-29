let apilink = "https://fakestoreapi.com/products";

fetch(apilink)
.then((response) => response.json())
.then((products) => {


 //task 1 - print all products
products.forEach((p) => {
    console.log("title: " + p.title);
    console.log("price: " + p.price);
});

//task 2 - print only product titles
products.forEach((p) => {
    console.log("title: " + p.title);
});

//task 3 - print only Total products
console.log("Total products: " + products.length);

//task 4- All categories
let categories = [...new Set(products.map((p) => p.category))];
console.log(categories);


//task 5 - product above $50
products
.filter((p) => p.price > 50)
.forEach((p) => {
    console.log( p.title , "-" , p.price );
});


// task 6 - product below $50
console.log (products.filter((p) => p.price < 50));

// Task 7: Find First Product Above $100
// Use:
// find()
// Output:
// {
//  title:"...",
//  price:109

console.log(products.find((p) => p.price > 100));

// Task 8: Search Product
// let searchText = "shirt";
// Find matching products.
// Use:
// includes()
// filter()

let searchText = "shirt";
console.log(products.filter((p) =>
     p.title.toLowerCase().includes(searchText.toLowerCase())));


// Task 9: Count Electronics Products
// Output:
// Electronics Count : 6

let electronicsCount = products.filter((p) => p.category === "electronics").length;
console.log("Electronics Count: " + electronicsCount);


// Task 10: Print Highest Price Product
// Use:
// sort()
// or
// reduce()

let highest = products.reduce((a, b) =>a.price > b.price ? a : b);
console.log(highest);

// Task 11: Print Lowest Price Product
// Use:
// sort()
// or
// reduce()
let lowest = products.reduce((a, b) =>a.price < b.price ? a : b);
console.log(lowest);


// Task 12: Calculate Total Price of All Products
// Use:
// reduce()
// Output:
// Total Price : XXXX

let totalPrice = products.reduce((total, p) => total + p.price, 0);
console.log("Total Price: " + totalPrice);


// Task 13: Calculate Average Product Price
// Output:
// Average Price : XXX
console.log("Average Price: " + (totalPrice / products.length));


// Task 14: Print Product With Highest Rating
// Output:
// Title : ...
// Rating : 4.9

let highestRating = products.reduce((a, b) => a.rating.rate > b.rating.rate ? a : b);
console.log("Title: " + highestRating.title);


// Task 15: Print Product With Lowest Rating
// Output:
// Title : ...
// Rating : 2.1

let lowestRating = products.reduce((a, b) => a.rating.rate < b.rating.rate ? a : b);
console.log("Title: " + lowestRating.title);



// Task 16: Category Wise Product Count
// Output:
// electronics : 6
// jewelery : 4
// men's clothing : 4
// women's clothing : 6
// Use:
// reduce()


let categoryCount = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
}, {});
console.log(categoryCount);


// Task 17: Create Discounted Products
// Apply 10% discount.
// Output:
// [
//  {
//   title:"...",
//   oldPrice:100,
//   newPrice:90
//  }
// ]
// Use:
// map()

let discountedProducts = products.map((p) => ({
    title: p.title,
    oldPrice: p.price,
    newPrice: (p.price * 0.9).toFixed(2)
}));
console.log(discountedProducts);



// Task 18: Sort Products Low To High
// Use:
// sort((a,b)=>a.price-b.price)

console.log([...products].sort((a, b) => a.price - b.price));
// Task 19: Sort Products High To Low
// Use:
// sort((a,b)=>b.price-a.price)

console.log([...products].sort((a, b) => b.price - a.price));


// Task 20: Check Any Product Above $500
// Use:
// some()
// Output:
// true
console.log(products.some((p) => p.price > 500));


// Task 21: Check All Products Above Rating 3
// Use:
// every()
// Output:
// true / false
console.log(products.every((p) => p.rating.rate > 3));


// Task 22: Print Top 5 Costliest Products
// Output:
// Product A
// Product B
// Product C
// Product D
// Product E

console.log([...products].sort((a, b) => b.price - a.price).slice(0, 5));


// Task 23: Print Top 5 Rated Products
// Sort by rating and print first 5.
console.log([...products].sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5));

// Task 24: Group Products By Category
// Output:
// {
//  electronics:[...],
//  jewelery:[...],
//  men's clothing:[...]
// }
let groupedByCategory = products.reduce((acc, p) => {
    if (!acc[p.category]) {
        acc[p.category] = [];
    }
    acc[p.category].push(p);
    return acc;
}, {});
console.log(groupedByCategory);

// Task 25: Convert Product Prices To INR
// Assume:
// 1 USD = 85 INR
// Output:
// Title : ...
// Price : ₹8500

products.forEach((p) => {
    console.log(p.title + " - ₹" + (p.price * 85).toFixed(2));
});



// Task 26: Amazon Product Filter
// Conditions:
// Price < 500
// Rating > 4
// Category = electronics
// Output matching products.

let amazonFiltered = products.filter((p) =>
    p.price < 500 &&
    p.rating.rate > 4 &&
    p.category === "electronics"
);
console.log(amazonFiltered);



// Task 27: Best Seller Product
// Find:
// Highest Rating

console.log(highestRating);



// Task 28: Product Analytics Dashboard
// Output:
// Total Products :
// Total Categories :
// Highest Price Product :
// Lowest Price Product :
// Average Price :
// Best Rated Product :

console.log({
    "Total Products": products.length,
    "Total Categories": categories.length,
    "Highest Price Product": highest.title ,
    "Lowest Price Product": lowest.title,
    "Average Price": (totalPrice / products.length),
    "Best Rated Product": highestRating.title
});


// Task 29: Inventory Report
// Output:
// Expensive Products :
// Affordable Products :
// Electronics :
// Jewellery :
// Mens Clothing :
// Womens Clothing :


console.log({
    "Expensive Products": products.filter((p) => p.price > 100),
    "Affordable Products": products.filter((p) => p.price <= 100),
    "Electronics": categoryCount["electronics"] || 0,
    "Jewellery": categoryCount["jewelery"] || 0,
    "Mens Clothing":products.filter((p) => p.category ==="men's clothing").length,
    "Womens Clothing":products.filter((p) => p.category ==="women's clothing").length
});

// Task 30: Complete Admin Dashboard (Interview Level)
// Build a report:
// TOTAL PRODUCTS :
// TOTAL CATEGORIES :
// TOTAL PRICE :
// AVERAGE PRICE :

// HIGHEST PRICE PRODUCT :
// LOWEST PRICE PRODUCT :

// BEST RATED PRODUCT :
// LOWEST RATED PRODUCT :

// PRODUCTS ABOVE $100 :
// PRODUCTS BELOW $50 :

// CATEGORY COUNTS :

console.log({
    "TOTAL PRODUCTS": products.length,
    "TOTAL CATEGORIES": categories.length,  
    "TOTAL PRICE": totalPrice,
    "AVERAGE PRICE": (totalPrice / products.length),
    "HIGHEST PRICE PRODUCT": highest.title,
    "LOWEST PRICE PRODUCT": lowest.title,
    "BEST RATED PRODUCT": highestRating.title,
    "LOWEST RATED PRODUCT": lowestRating.title,
    "PRODUCTS ABOVE $100": products.filter((p) => p.price > 100),
    "PRODUCTS BELOW $50": products.filter((p) => p.price < 50),
    "CATEGORY COUNTS": categoryCount
})

})
.catch((err) => console.log(err))
.finally(() => console.log("Data fetching completed."));








