document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let response = document.getElementById("responseMsg");

    if (name === "" || email === "" || message === "") {
        response.style.color = "red";
        response.textContent = "please fill in all fields!";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        response.style.color = "red";
        response.textContent = "please enter a valid email!";
        return;
    }

    response.style.color = "green";
    response.textContent = "message sent successfully!";
    document.getElementById("contactForm").reset();
});
