"use strict";

// selectors
const totalParagraph = document.querySelector(".total");
const colaButton = document.querySelector(".cola");
const peanutsButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");
// light bulb
const lightBulb = document.querySelector(".light");
const ligthOn = document.querySelector(".on");
const lightOff = document.querySelector(".off");
const lightToggle = document.querySelector(".toggle");
const lightEnd = document.querySelector(".end");
// node list:
const lightButtons = document.querySelectorAll(".light-switch");
// make money:
const coinForm = document.querySelector(".form");
const coinContainer = document.querySelector(".coin-container");
let total = 0;

console.dir(totalParagraph);

const updateVendingTotal = (price) => {
  total += price;
  totalParagraph.textContent = `Total: $${total}.00`;
};

colaButton.addEventListener("click", () => {
  updateVendingTotal(2);
});

peanutsButton.addEventListener("click", () => {
  updateVendingTotal(3);
});

chocolateButton.addEventListener("click", () => {
  updateVendingTotal(4);
});

gummiesButton.addEventListener("click", () => {
  updateVendingTotal(6);
});

coinForm.addEventListener("submit", (e) => {
  // prevent default only for form submission:
  e.preventDefault();
  // grab data from user input, check in console
  const howManyInput = document.querySelector("#howMany");
  const typeOfCoinInput = document.querySelector("#type");
  console.dir(howManyInput);
  console.dir(typeOfCoinInput);
  //   make elements
  const newCoin = document.createElement("div");
  //   modify element
  //   newCoin.classList.add(typeOfCoinInput, "coin");
  // append to the page
  coinContainer.append(newCoin);
});

ligthOn.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "yellow";
  lightBulb.style.color = "black";
});

lightOff.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "black";
  lightBulb.style.color = "white";
});

lightToggle.addEventListener("click", () => {
  lightBulb.classList.toggle("light");
});

lightEnd.addEventListener("click", () => {
  lightBulb.remove();
  lightButtons.forEach((button) => {
    button.setAttribute("disabled", true);
  });
});
