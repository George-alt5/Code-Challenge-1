function estimateTransactionFee(amountToSend) {
  const rawFee = amountToSend * 0.015;
  const fee = Math.min(Math.max(rawFee, 10), 70);
  const total = amountToSend + fee;
}
