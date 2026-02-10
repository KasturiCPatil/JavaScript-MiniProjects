const prompt = require("prompt-sync")();

let balance = 10000;
const correctPin = 1234;
let pin;

// PIN checking
while (true) {
  pin = Number(prompt("Enter PIN: "));

  if (pin === correctPin) {
    break;
  } else {
    console.log("❌ Invalid PIN!");
  }
}

let choice = 0;

// ATM Menu
while (choice !== 4) {
  console.log("\n1. Check Balance");
  console.log("2. Deposit");
  console.log("3. Withdraw");
  console.log("4. Exit");

  choice = Number(prompt("Choice: "));

  switch (choice) {
    case 1:
      console.log("💰 Balance: ₹" + balance);
      break;

    case 2:
      let deposit = Number(prompt("Deposit amount: ₹"));
      balance = balance + deposit;
      console.log("✅ Deposited! New Balance: ₹" + balance);
      break;

    case 3:
      let withdraw = Number(prompt("Withdraw amount: ₹"));

      if (withdraw > balance) {
        console.log("❌ Insufficient balance!");
      } else {
        balance = balance - withdraw;
        console.log("✅ Withdrawn! New Balance: ₹" + balance);
      }
      break;

    case 4:
      console.log("👋 Thank you!");
      break;

    default:
      console.log("❌ Invalid choice");
  }
}
