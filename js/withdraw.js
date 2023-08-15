document.getElementById('btn-withdraw').addEventListener('click', function(){
    // New Withdraw amount
    const withdrawAmountElement = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawAmountElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    // Check Total balance
    const balanceTotalString = document.getElementById('balance-total');
    
    if(newWithdrawAmount <= 0) {
        alert("Deposit Amount should be grater than 0!");
    }
    else if (newWithdrawAmountString === ""){
        alert("Provide a value!");
    }
    else if (isNaN(newWithdrawAmount) === true){
        alert("Give a number!");
    }
    else if (newWithdrawAmount > parseFloat(balanceTotalString.innerText)) {
        alert("You have not sufficient balance. Deposit First!")
    } 
    else {
        // Previous withdraw amount
        const withdrawTotal = document.getElementById('withdraw-total');
        const PreviousWithdrawTotal = parseFloat(withdrawTotal.innerText);

        // Add with total withdraw amount
        const currentWithdrawTotal = PreviousWithdrawTotal + newWithdrawAmount;

        withdrawTotal.innerText = currentWithdrawTotal

        // Minus in total balance
        const balanceTotal = parseFloat(balanceTotalString.innerText) - newWithdrawAmount;
        balanceTotalString.innerText = balanceTotal;
    }

    withdrawAmountElement.value = "";
    
})