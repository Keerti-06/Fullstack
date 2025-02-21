// Sample JSON object containing products
const products = [
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Smartphone", price: 45000 },
    { id: 3, name: "Tablet", price: 25000 },
    { id: 4, name: "Smartwatch", price: 15000 },
    { id: 5, name: "Headphones", price: 5000 }
];

// Function to display all products
function displayProducts(productList) {
    console.log("Product List:");
    productList.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ₹${product.price}`);
    });
}

// Function to filter products based on a minimum price
function filterProductsByPrice(minPrice) {
    const filteredProducts = products.filter(product => product.price >= minPrice);
    console.log(`\nProducts with price >= ₹${minPrice}:`);
    displayProducts(filteredProducts);
}

// Display all products initially
displayProducts(products);

// Example usage: Filter products with a minimum price of 20000
const userMinPrice = 20000;
filterProductsByPrice(userMinPrice);
