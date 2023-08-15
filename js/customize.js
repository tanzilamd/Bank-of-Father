document.getElementById('btn-set-balance').addEventListener('click', function(){
    const newBalanceField = document.getElementById('set-total-balance');
    const newBalance = parseFloat(newBalanceField.value);
    
    if(newBalance <= 0) {
        alert("Amount should be grater than 0!");
    }
    else if (newBalanceField.value === ""){
        alert("Provide a value!");
    }
    else if (isNaN(newBalance) === true){
        alert("Give a number!");
    }
    else {
        localStorage.setItem("totalBalanceLocal", newBalance);
        console.log(newBalance)
        newBalanceField.value = "";

        window.location.href = "bank.html";
    }
})


// logout
document.getElementById('btn-logout').addEventListener('click', function(){
    window.location.href = "index.html";
    
    alert("Logged out!");
})