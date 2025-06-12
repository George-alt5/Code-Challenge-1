function estimateTransactionFee(amountToSend){
    let fee = amountToSend * 0.015;

    if(fee < 10){
        fee = 10;
    }else if (fee > 70){
        fee = 70;
    }
    const total = amountToSend + fee;
}