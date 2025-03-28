function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "1234") {
        alert("Kala ko Hacker!.");
        window.location.href = "web.html";
    } else {
        errorMessage.textContent = "May Hacker!.";
    }
}
