
document.getElementById('btn-deposit').addEventListener('click', function(){
    // New amount deposit
    const depositAmountElement = document.getElementById('deposit-amount');
    const newDepositString = depositAmountElement.value;
    const newDepositAmount = parseFloat(newDepositString);
    
    if(newDepositAmount <= 0) {
        alert("Deposit Amount should be grater than 0!");
    }
    else if (newDepositString === ""){
        alert("Provide a value!");
    }
    else if (isNaN(newDepositAmount) === true){
        alert("Give a number!");
    }
    else {
        // Previous total amount
        const DepositTotal = document.getElementById('deposit-total');
        const PreviousDepositTotal = parseFloat(DepositTotal.innerText);

        // Current + Previous deposit
        const currentDepositTotal = PreviousDepositTotal + newDepositAmount;

        DepositTotal.innerText = currentDepositTotal

        // Add with total balance
        const balanceTotalString = document.getElementById('balance-total');
        const balanceTotal = parseFloat(balanceTotalString.innerText);
        const newTotalBalance = balanceTotal + newDepositAmount;

        balanceTotalString.innerText = newTotalBalance;
    }

    depositAmountElement.value = "";
    
})