function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015;
  let fee = amountToSend * feePercentage;

  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  const totalAmount = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}`);
  console.log("\nSend Money Securely!");
}

const sendInput = prompt("Unatuma Ngapi? (KES):");
const amount = parseFloat(sendInput);
if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else {
  console.log("Please enter a valid amount.");
}
