// ==============================
// Part 1: Variables and Conditionals
// ==============================
let userName = "Andrew";
const age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ==============================
// Part 2: Custom Functions
// ==============================
function greetUser(name) {
  return "Hello, " + name + "!";
}

function squareNumber(num) {
  return num * num;
}

console.log(greetUser(userName));
console.log("Square of 5 is: " + squareNumber(5));

// ==============================
// Part 3: Loops
// ==============================

// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop count: " + i);
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
  console.log("While loop count: " + counter);
  counter++;
}

// ==============================
// Part 4: DOM Interactions
// ==============================

// 1. Change text content on button click
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("description").textContent = "The text has been changed!";
});

// 2. Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("itemList").appendChild(newItem);
});

// 3. Toggle theme (light/dark mode)
document.getElementById("toggleThemeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
