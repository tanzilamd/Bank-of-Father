document.getElementById("btn-submit").addEventListener('click', function(){    

    const emailField = document.getElementById("user-email");
    const email = emailField.value;

    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    
    if((email === "mdtanzil858@gmail.com" || "tanzilamd") && password === "12345"){
        window.location.href = "bank.html";
        console.log("logged in");
    } else {
        alert("Invalid username or password!")
        console.log("Wrong Login Information!")
    }

})