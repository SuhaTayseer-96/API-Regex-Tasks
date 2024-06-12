document.getElementById("fname").addEventListener("input", function() {
    const input = this.value;
    const regex = /\d/; 

    if (regex.test(input)) {
        document.getElementById("fnameError").innerText = "Numbers are not allowed.";
    } else {
        document.getElementById("fnameError").innerText = "";
    }
});


document.getElementById("bdate").addEventListener("input", function() {
    const input = this.value;
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (regex.test(input)) { document.getElementById("bdateError").innerText = "";
    } else {
            document.getElementById("bdateError").innerText = "The format should be dd/mm/yyyy";
    }

});

document.getElementById("email").addEventListener("input", function() {
    const input = this.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(input)) {
        document.getElementById("emailError").innerText = "The email is not valid";
    } else {
        document.getElementById("emailError").innerText = "";
    }
});

