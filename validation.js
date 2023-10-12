const form = document.getElementById("submitForm");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let address = document.getElementById("address1");
    let country = document.getElementById("country");
    let state = document.getElementById("state");
    let city = document.getElementById("city");
    let errors = document.getElementById("validationErrors");
    let emptyState = "No state";
    let messages = [];

    if (firstName.value === "") {
        messages.push("First name is required");
    }
    if (lastName.value === "") {
        messages.push("Last name is required");
    }
    let phoneRegex = /^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/;
    if (!phoneRegex.test(phone.value)) {
        messages.push("Wrong phone number format");
    }
    if (email.value === "") {
        messages.push("Email is required");
    }
    if (address.value === "") {
        messages.push("Address is required");
    }
    if (country.value === "") {
        messages.push("Country is required");
    }
    if (city.value === "") {
        messages.push("City is required");
    }
    if (document.getElementById("state").value === '') {
        
       
    }
    if (messages.length > 0) {
        errors.innerHTML = "<p>Please fix the following errors to proceed:</p><ul><li>" + messages.join("</li><li>") + "</li></ul>";
    } else {
        localStorage.setItem("firstName", firstName.value)
        localStorage.setItem("lastName", lastName.value)
        localStorage.setItem("phone", phone.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("address", address.value)
        localStorage.setItem("country", country.value)
        localStorage.setItem("state", emptyState)
        localStorage.setItem("city", city.value)
            window.location.href = "success.html";
    }
});
